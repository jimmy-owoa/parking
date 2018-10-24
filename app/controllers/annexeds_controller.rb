class AnnexedsController < ApplicationController
  before_action :set_annexed, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  # GET /annexeds
  # GET /annexeds.json
  def index
    @annexeds = Annexed.paginate(:page => params[:page], :per_page => 10)
  end

  # GET /annexeds/1
  # GET /annexeds/1.json
  def show
  end

  # GET /annexeds/new
  def new
    @annexed = Annexed.new
  end

  # GET /annexeds/1/edit
  def edit
  end

  # POST /annexeds
  # POST /annexeds.json
  def create
    @annexed = Annexed.new(annexed_params)

    respond_to do |format|
      if @annexed.save
        format.html { redirect_to @annexed, notice: 'Annexed was successfully created.' }
        format.json { render :show, status: :created, location: @annexed }
      else
        format.html { render :new }
        format.json { render json: @annexed.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /annexeds/1
  # PATCH/PUT /annexeds/1.json
  def update
    respond_to do |format|
      if @annexed.update(annexed_params)
        format.html { redirect_to @annexed, notice: 'Annexed was successfully updated.' }
        format.json { render :show, status: :ok, location: @annexed }
      else
        format.html { render :edit }
        format.json { render json: @annexed.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /annexeds/1
  # DELETE /annexeds/1.json
  def destroy
    @annexed.destroy
    respond_to do |format|
      format.html { redirect_to annexeds_url, notice: 'Annexed was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_annexed
      @annexed = Annexed.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def annexed_params
      params.require(:annexed).permit(:name, :address, :leader)
    end
end
