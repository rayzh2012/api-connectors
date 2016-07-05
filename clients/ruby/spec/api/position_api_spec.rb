=begin
#BitMEX API

#REST API for the BitMEX.com trading platform.<br><br><a href=\"/app/restAPI\">REST Documentation</a><br><a href=\"/app/wsAPI\">Websocket Documentation</a>

OpenAPI spec version: 1.2.0
Contact: support@bitmex.com
Generated by: https://github.com/swagger-api/swagger-codegen.git

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

=end

require 'spec_helper'
require 'json'

# Unit tests for SwaggerClient::PositionApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'PositionApi' do
  before do
    # run before each test
    @instance = SwaggerClient::PositionApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of PositionApi' do
    it 'should create an instact of PositionApi' do
      expect(@instance).to be_instance_of(SwaggerClient::PositionApi)
    end
  end

  # unit tests for position_get
  # Get your positions.
  # See &lt;a href&#x3D;\&quot;http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_AP_6580.html\&quot;&gt;the FIX Spec&lt;/a&gt; for explanations of these fields.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :filter Table filter. For example, send {\&quot;symbol\&quot;: \&quot;XBT24H\&quot;}.
  # @option opts [String] :columns Which columns to fetch. For example, send [\&quot;columnName\&quot;].
  # @option opts [Float] :count Number of rows to fetch.
  # @return [Array<Position>]
  describe 'position_get test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for position_isolate_margin
  # Enable isolated margin or cross margin per-position.
  # On Speculative (DPE-Enabled) contracts, users can switch isolate margin per-position. This function allows switching margin isolation (aka fixed margin) on and off.
  # @param symbol Position symbol to isolate.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :enabled True for isolated margin, false for cross margin.
  # @return [Position]
  describe 'position_isolate_margin test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for position_transfer_isolated_margin
  # Transfer equity in or out of a position.
  # When margin is isolated on a position, use this function to add or remove margin from the position. Note that you cannot remove margin below the initial margin threshold.
  # @param symbol Symbol of position to isolate.
  # @param amount Amount to transfer, in Satoshis. May be negative.
  # @param [Hash] opts the optional parameters
  # @return [Position]
  describe 'position_transfer_isolated_margin test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for position_update_leverage
  # Choose leverage for a position.
  # On Speculative (DPE-Enabled) contracts, users can choose an isolated leverage. This will automatically enable isolated margin.
  # @param symbol Symbol of position to adjust.
  # @param leverage Leverage value. Send a number between 0.01 and 100 to enable isolated margin with a fixed leverage. Send 0 to enable cross margin.
  # @param [Hash] opts the optional parameters
  # @return [Position]
  describe 'position_update_leverage test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
