module ApplicationHelper

  def model_class
    params[:controller].singularize.capitalize.constantize
  end

end
