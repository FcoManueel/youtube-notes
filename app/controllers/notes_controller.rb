class NotesController < ApplicationController

  # GET /notes
  # GET /notes.json
  # getAll
  def index
    @notes = Note.all
    logger.debug "a ver si entra esta madre"

    respond_to do |format|
      format.json { render json: @notes }
    end
  end

  # GET /notes/1
  # GET /notes/1.json
  # getId
  def show
    @note = Note.find(params[:id])
    respond_to do |format|
      format.json{ render json: @note }
    end
  end

  # POST /notes
  # POST /notes.json
  # saveNote
  def create
    @note = Note.new(params[:note])

    respond_to do |format|
      if @note.save
        format.json { render json: @note, status: :created, location: @note }
      else
        format.json {render json: @note.errors}
        # format.json { render json: @note.errors, }
      end
    end
    # render
  end

  # PUT /notes/1
  # PUT /notes/1.json
  def update
    # @note = Note.find(params[:id])

    binding.pry
    @note = Note.find(params[:note][:_id])

    @note.content = 'mierda'
    @note.save

    #
    # respond_to do |format|
    #   # if @note.update(params[:note])
    #   if @note.save
    #     format.html { redirect_to @note, notice: 'Note was successfully updated.' }
    #     format.json {  head :no_content }
    #   else
    #     format.html { render action: "edit" }
    #     format.json { render json: @note.errors, status: :unprocessable_entity }
    #   end
    # end
    # render

  end

  # DELETE /notes/1
  # DELETE /notes/1.json
  def destroy
    @note = Note.find(params[:id])
    @note.destroy

    respond_to do |format|
      format.html {  }
      format.json { head :no_content }
    end
  end
  # render
end
