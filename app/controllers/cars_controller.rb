class CarsController < ApplicationController
  before_action :set_car, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource
  # GET /cars
  # GET /cars.json

  def index
    @cars = Car.paginate(:page => params[:page], :per_page => 10)
    respond_to do |format|
      format.html
      format.json {
        render json: { cars: Car.api_json }
      }
      format.js
    end
    gon.plates = Car.pluck(:plate).map { |plate| [plate, nil] }.to_h
    gon.car_ids = Car.all.map { |car| [car.plate, car.id] }.to_h
  end

  # GET /cars/1
  # GET /cars/1.json
  def show
  end

  # GET /cars/new
  def new
    @car = Car.new
    respond_to do |format|
      format.js
      format.html
    end
  end

  # GET /cars/1/edit
  def edit
    respond_to do |format|
      format.js
      format.html
    end 
  end

  # POST /cars
  # POST /cars.json
  def create
    @car = Car.new(car_params)

    respond_to do |format|
      if @car.save
        format.html { redirect_to @car, notice: 'Car was successfully created.' }
        format.json { render :show, status: :created, location: @car }
        format.js
      else
        format.html { render :new }
        format.json { render json: @car.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  # PATCH/PUT /cars/1
  # PATCH/PUT /cars/1.json
  def update
    respond_to do |format|
      if @car.update(car_params)
        format.html { redirect_to @car, notice: 'Car was successfully updated.' }
        format.json { render :show, status: :ok, location: @car }
      else
        format.html { render :edit }
        format.json { render json: @car.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cars/1
  # DELETE /cars/1.json
  def destroy
    @car.destroy
    respond_to do |format|
      format.html { redirect_to cars_url, notice: 'Car was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def car_params
      params.require(:car).permit(:plate, :color, :brand_id, :owner_id, :model)
    end
end
