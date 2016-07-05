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

require 'date'

module SwaggerClient

  class Margin
    attr_accessor :account

    attr_accessor :currency

    attr_accessor :risk_limit

    attr_accessor :prev_state

    attr_accessor :state

    attr_accessor :action

    attr_accessor :amount

    attr_accessor :pending_credit

    attr_accessor :pending_debit

    attr_accessor :confirmed_debit

    attr_accessor :prev_realised_pnl

    attr_accessor :prev_unrealised_pnl

    attr_accessor :gross_comm

    attr_accessor :gross_open_cost

    attr_accessor :gross_open_premium

    attr_accessor :gross_exec_cost

    attr_accessor :gross_mark_value

    attr_accessor :risk_value

    attr_accessor :taxable_margin

    attr_accessor :init_margin

    attr_accessor :maint_margin

    attr_accessor :session_margin

    attr_accessor :target_excess_margin

    attr_accessor :var_margin

    attr_accessor :realised_pnl

    attr_accessor :unrealised_pnl

    attr_accessor :indicative_tax

    attr_accessor :unrealised_profit

    attr_accessor :synthetic_margin

    attr_accessor :wallet_balance

    attr_accessor :margin_balance

    attr_accessor :margin_balance_pcnt

    attr_accessor :margin_leverage

    attr_accessor :margin_used_pcnt

    attr_accessor :excess_margin

    attr_accessor :excess_margin_pcnt

    attr_accessor :available_margin

    attr_accessor :withdrawable_margin

    attr_accessor :timestamp

    attr_accessor :gross_last_value

    attr_accessor :commission


    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'account' => :'account',
        :'currency' => :'currency',
        :'risk_limit' => :'riskLimit',
        :'prev_state' => :'prevState',
        :'state' => :'state',
        :'action' => :'action',
        :'amount' => :'amount',
        :'pending_credit' => :'pendingCredit',
        :'pending_debit' => :'pendingDebit',
        :'confirmed_debit' => :'confirmedDebit',
        :'prev_realised_pnl' => :'prevRealisedPnl',
        :'prev_unrealised_pnl' => :'prevUnrealisedPnl',
        :'gross_comm' => :'grossComm',
        :'gross_open_cost' => :'grossOpenCost',
        :'gross_open_premium' => :'grossOpenPremium',
        :'gross_exec_cost' => :'grossExecCost',
        :'gross_mark_value' => :'grossMarkValue',
        :'risk_value' => :'riskValue',
        :'taxable_margin' => :'taxableMargin',
        :'init_margin' => :'initMargin',
        :'maint_margin' => :'maintMargin',
        :'session_margin' => :'sessionMargin',
        :'target_excess_margin' => :'targetExcessMargin',
        :'var_margin' => :'varMargin',
        :'realised_pnl' => :'realisedPnl',
        :'unrealised_pnl' => :'unrealisedPnl',
        :'indicative_tax' => :'indicativeTax',
        :'unrealised_profit' => :'unrealisedProfit',
        :'synthetic_margin' => :'syntheticMargin',
        :'wallet_balance' => :'walletBalance',
        :'margin_balance' => :'marginBalance',
        :'margin_balance_pcnt' => :'marginBalancePcnt',
        :'margin_leverage' => :'marginLeverage',
        :'margin_used_pcnt' => :'marginUsedPcnt',
        :'excess_margin' => :'excessMargin',
        :'excess_margin_pcnt' => :'excessMarginPcnt',
        :'available_margin' => :'availableMargin',
        :'withdrawable_margin' => :'withdrawableMargin',
        :'timestamp' => :'timestamp',
        :'gross_last_value' => :'grossLastValue',
        :'commission' => :'commission'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'account' => :'Float',
        :'currency' => :'String',
        :'risk_limit' => :'Float',
        :'prev_state' => :'String',
        :'state' => :'String',
        :'action' => :'String',
        :'amount' => :'Float',
        :'pending_credit' => :'Float',
        :'pending_debit' => :'Float',
        :'confirmed_debit' => :'Float',
        :'prev_realised_pnl' => :'Float',
        :'prev_unrealised_pnl' => :'Float',
        :'gross_comm' => :'Float',
        :'gross_open_cost' => :'Float',
        :'gross_open_premium' => :'Float',
        :'gross_exec_cost' => :'Float',
        :'gross_mark_value' => :'Float',
        :'risk_value' => :'Float',
        :'taxable_margin' => :'Float',
        :'init_margin' => :'Float',
        :'maint_margin' => :'Float',
        :'session_margin' => :'Float',
        :'target_excess_margin' => :'Float',
        :'var_margin' => :'Float',
        :'realised_pnl' => :'Float',
        :'unrealised_pnl' => :'Float',
        :'indicative_tax' => :'Float',
        :'unrealised_profit' => :'Float',
        :'synthetic_margin' => :'Float',
        :'wallet_balance' => :'Float',
        :'margin_balance' => :'Float',
        :'margin_balance_pcnt' => :'Float',
        :'margin_leverage' => :'Float',
        :'margin_used_pcnt' => :'Float',
        :'excess_margin' => :'Float',
        :'excess_margin_pcnt' => :'Float',
        :'available_margin' => :'Float',
        :'withdrawable_margin' => :'Float',
        :'timestamp' => :'Date',
        :'gross_last_value' => :'Float',
        :'commission' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}){|(k,v), h| h[k.to_sym] = v}

      if attributes.has_key?(:'account')
        self.account = attributes[:'account']
      end

      if attributes.has_key?(:'currency')
        self.currency = attributes[:'currency']
      end

      if attributes.has_key?(:'riskLimit')
        self.risk_limit = attributes[:'riskLimit']
      end

      if attributes.has_key?(:'prevState')
        self.prev_state = attributes[:'prevState']
      end

      if attributes.has_key?(:'state')
        self.state = attributes[:'state']
      end

      if attributes.has_key?(:'action')
        self.action = attributes[:'action']
      end

      if attributes.has_key?(:'amount')
        self.amount = attributes[:'amount']
      end

      if attributes.has_key?(:'pendingCredit')
        self.pending_credit = attributes[:'pendingCredit']
      end

      if attributes.has_key?(:'pendingDebit')
        self.pending_debit = attributes[:'pendingDebit']
      end

      if attributes.has_key?(:'confirmedDebit')
        self.confirmed_debit = attributes[:'confirmedDebit']
      end

      if attributes.has_key?(:'prevRealisedPnl')
        self.prev_realised_pnl = attributes[:'prevRealisedPnl']
      end

      if attributes.has_key?(:'prevUnrealisedPnl')
        self.prev_unrealised_pnl = attributes[:'prevUnrealisedPnl']
      end

      if attributes.has_key?(:'grossComm')
        self.gross_comm = attributes[:'grossComm']
      end

      if attributes.has_key?(:'grossOpenCost')
        self.gross_open_cost = attributes[:'grossOpenCost']
      end

      if attributes.has_key?(:'grossOpenPremium')
        self.gross_open_premium = attributes[:'grossOpenPremium']
      end

      if attributes.has_key?(:'grossExecCost')
        self.gross_exec_cost = attributes[:'grossExecCost']
      end

      if attributes.has_key?(:'grossMarkValue')
        self.gross_mark_value = attributes[:'grossMarkValue']
      end

      if attributes.has_key?(:'riskValue')
        self.risk_value = attributes[:'riskValue']
      end

      if attributes.has_key?(:'taxableMargin')
        self.taxable_margin = attributes[:'taxableMargin']
      end

      if attributes.has_key?(:'initMargin')
        self.init_margin = attributes[:'initMargin']
      end

      if attributes.has_key?(:'maintMargin')
        self.maint_margin = attributes[:'maintMargin']
      end

      if attributes.has_key?(:'sessionMargin')
        self.session_margin = attributes[:'sessionMargin']
      end

      if attributes.has_key?(:'targetExcessMargin')
        self.target_excess_margin = attributes[:'targetExcessMargin']
      end

      if attributes.has_key?(:'varMargin')
        self.var_margin = attributes[:'varMargin']
      end

      if attributes.has_key?(:'realisedPnl')
        self.realised_pnl = attributes[:'realisedPnl']
      end

      if attributes.has_key?(:'unrealisedPnl')
        self.unrealised_pnl = attributes[:'unrealisedPnl']
      end

      if attributes.has_key?(:'indicativeTax')
        self.indicative_tax = attributes[:'indicativeTax']
      end

      if attributes.has_key?(:'unrealisedProfit')
        self.unrealised_profit = attributes[:'unrealisedProfit']
      end

      if attributes.has_key?(:'syntheticMargin')
        self.synthetic_margin = attributes[:'syntheticMargin']
      end

      if attributes.has_key?(:'walletBalance')
        self.wallet_balance = attributes[:'walletBalance']
      end

      if attributes.has_key?(:'marginBalance')
        self.margin_balance = attributes[:'marginBalance']
      end

      if attributes.has_key?(:'marginBalancePcnt')
        self.margin_balance_pcnt = attributes[:'marginBalancePcnt']
      else
        self.margin_balance_pcnt = 0.0
      end

      if attributes.has_key?(:'marginLeverage')
        self.margin_leverage = attributes[:'marginLeverage']
      else
        self.margin_leverage = 0.0
      end

      if attributes.has_key?(:'marginUsedPcnt')
        self.margin_used_pcnt = attributes[:'marginUsedPcnt']
      else
        self.margin_used_pcnt = 0.0
      end

      if attributes.has_key?(:'excessMargin')
        self.excess_margin = attributes[:'excessMargin']
      end

      if attributes.has_key?(:'excessMarginPcnt')
        self.excess_margin_pcnt = attributes[:'excessMarginPcnt']
      else
        self.excess_margin_pcnt = 0.0
      end

      if attributes.has_key?(:'availableMargin')
        self.available_margin = attributes[:'availableMargin']
      end

      if attributes.has_key?(:'withdrawableMargin')
        self.withdrawable_margin = attributes[:'withdrawableMargin']
      end

      if attributes.has_key?(:'timestamp')
        self.timestamp = attributes[:'timestamp']
      end

      if attributes.has_key?(:'grossLastValue')
        self.gross_last_value = attributes[:'grossLastValue']
      end

      if attributes.has_key?(:'commission')
        self.commission = attributes[:'commission']
      else
        self.commission = 0.0
      end

    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properies with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      return invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @account.nil?
      return false if @currency.nil?
      return true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          account == o.account &&
          currency == o.currency &&
          risk_limit == o.risk_limit &&
          prev_state == o.prev_state &&
          state == o.state &&
          action == o.action &&
          amount == o.amount &&
          pending_credit == o.pending_credit &&
          pending_debit == o.pending_debit &&
          confirmed_debit == o.confirmed_debit &&
          prev_realised_pnl == o.prev_realised_pnl &&
          prev_unrealised_pnl == o.prev_unrealised_pnl &&
          gross_comm == o.gross_comm &&
          gross_open_cost == o.gross_open_cost &&
          gross_open_premium == o.gross_open_premium &&
          gross_exec_cost == o.gross_exec_cost &&
          gross_mark_value == o.gross_mark_value &&
          risk_value == o.risk_value &&
          taxable_margin == o.taxable_margin &&
          init_margin == o.init_margin &&
          maint_margin == o.maint_margin &&
          session_margin == o.session_margin &&
          target_excess_margin == o.target_excess_margin &&
          var_margin == o.var_margin &&
          realised_pnl == o.realised_pnl &&
          unrealised_pnl == o.unrealised_pnl &&
          indicative_tax == o.indicative_tax &&
          unrealised_profit == o.unrealised_profit &&
          synthetic_margin == o.synthetic_margin &&
          wallet_balance == o.wallet_balance &&
          margin_balance == o.margin_balance &&
          margin_balance_pcnt == o.margin_balance_pcnt &&
          margin_leverage == o.margin_leverage &&
          margin_used_pcnt == o.margin_used_pcnt &&
          excess_margin == o.excess_margin &&
          excess_margin_pcnt == o.excess_margin_pcnt &&
          available_margin == o.available_margin &&
          withdrawable_margin == o.withdrawable_margin &&
          timestamp == o.timestamp &&
          gross_last_value == o.gross_last_value &&
          commission == o.commission
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [account, currency, risk_limit, prev_state, state, action, amount, pending_credit, pending_debit, confirmed_debit, prev_realised_pnl, prev_unrealised_pnl, gross_comm, gross_open_cost, gross_open_premium, gross_exec_cost, gross_mark_value, risk_value, taxable_margin, init_margin, maint_margin, session_margin, target_excess_margin, var_margin, realised_pnl, unrealised_pnl, indicative_tax, unrealised_profit, synthetic_margin, wallet_balance, margin_balance, margin_balance_pcnt, margin_leverage, margin_used_pcnt, excess_margin, excess_margin_pcnt, available_margin, withdrawable_margin, timestamp, gross_last_value, commission].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /^Array<(.*)>/i
          # check to ensure the input is an array given that the the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map{ |v| _deserialize($1, v) } )
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :BOOLEAN
        if value.to_s =~ /^(true|t|yes|y|1)$/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        temp_model = SwaggerClient.const_get(type).new
        temp_model.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        next if value.nil?
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map{ |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end

end
