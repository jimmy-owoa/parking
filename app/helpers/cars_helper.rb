module CarsHelper

  def header_modal_form
    t("helpers.actions.#{params[:action]}", model: Car.model_name.human)
  end

  def owner_options
    Owner.all.map{|i| [i.name + ' '+i.lastname, i.id]}
  end

  def brand_options
    Brand.all.map{|i| [i.name, i.id]}
  end

end
