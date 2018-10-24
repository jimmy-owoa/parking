module ApplicationHelper

  def model_class
    params[:controller].singularize.capitalize.constantize
  end

  def models_to_sidenav
    models = [Car]
    return models if current_user.normal?
    models.concat([
      Owner,
      Brand,
      Annexed
    ])
  end

end
