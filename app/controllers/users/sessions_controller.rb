# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  skip_before_action :verify_authenticity_token, only: [:create]
  respond_to :json, :html
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    respond_to do |format|
      format.html
      user_params = params.require(:user).permit(:email, :password)
      user = User.find_by_email(user_params[:email])
      if user && user.try("valid_password?", user_params[:password])
        token = Devise.friendly_token
        session[:token] = token
        sign_in(user)
        format.json {
          render json: { currentUser: user.api_json, rootPath: cars_url }, status: 200
        }
      else
        format.json {
          render json: { messages: user.errors.full_messages }, status: 401
        }
      end
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
