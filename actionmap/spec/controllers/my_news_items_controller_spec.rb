# frozen_string_literal: true

require 'rails_helper'

RSpec.describe MyNewsItemsController, type: :controller do
  before(:each) do
    skip 'Skipping all tests in this describe block'
  end
  
  let(:representative) { create(:representative) }
  let(:issue) { 'Climate Change' }
  let(:top_articles) do
    5.times.map do |i|
      OpenStruct.new(title:       "Top Article #{i + 1}",
                     description: "Description #{i + 1}",
                     url:         "http://example.com/articles#{i + 1}")
    end
  end

  before do
    service = instance_double(NewsAPIService)
    allow(NewsAPIService).to receive(:new).and_return(service)
    allow(service).to receive(:fetch_any_articles).and_return(top_articles)

    # Simulate user login
    @user = create(:user) 
    session[:current_user_id] = @user.id  

    @news_item = create(:news_item, representative: representative)
  end

  describe 'GET #search_top_articles' do
    it 'redirects to the search_top_articles' do
      get :search_top_articles, params: { representative_id: representative.id, issue: issue }

      expect(assigns(:representative_name)).to eq(representative.name)
      expect(assigns(:top_articles)).to eq(top_articles)
      expect(assigns(:ratings)).to eq([1, 2, 3, 4, 5])
      expect(response).to render_template(:top5search)
    end
  end
end