/**
 * BitMEX API
 * REST API for the BitMEX.com trading platform.<br><br><a href=\"/app/restAPI\">REST Documentation</a><br><a href=\"/app/wsAPI\">Websocket Documentation</a>
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Trade', 'model/Error', 'model/TradeBin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Trade'), require('../model/Error'), require('../model/TradeBin'));
  } else {
    // Browser globals (root is window)
    if (!root.BitMexApi) {
      root.BitMexApi = {};
    }
    root.BitMexApi.TradeApi = factory(root.BitMexApi.ApiClient, root.BitMexApi.Trade, root.BitMexApi.Error, root.BitMexApi.TradeBin);
  }
}(this, function(ApiClient, Trade, Error, TradeBin) {
  'use strict';

  /**
   * Trade service.
   * @module api/TradeApi
   * @version 1.2.0
   */

  /**
   * Constructs a new TradeApi. 
   * @alias module:api/TradeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tradeGet operation.
     * @callback module:api/TradeApi~tradeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trade>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Trades.
     * Please note that indices (symbols starting with &#x60;.&#x60;) post trades at intervals to the trade feed. These have a &#x60;size&#x60; of 0 and are used only to indicate a changing price.  See [the FIX Spec](http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_AE_6569.html) for explanations of these fields.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.  You can also send a timeframe, e.g. &#x60;XBU:monthly&#x60;. Timeframes are &#x60;daily&#x60;, &#x60;weekly&#x60;, &#x60;monthly&#x60;, &#x60;quarterly&#x60;, and &#x60;biquarterly&#x60;.
     * @param {String} opts.filter Generic table filter. Send JSON key/value pairs, such as &#x60;{\&quot;key\&quot;: \&quot;value\&quot;}&#x60;. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#timestamp-filters) for more details.
     * @param {String} opts.columns Array of column names to fetch. If omitted, will return all columns.  Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.
     * @param {Number} opts.count Number of results to fetch. (default to 100)
     * @param {Number} opts.start Starting point for results. (default to 0)
     * @param {Boolean} opts.reverse If true, will sort results newest first. (default to false)
     * @param {Date} opts.startTime Starting date filter for results.
     * @param {Date} opts.endTime Ending date filter for results.
     * @param {module:api/TradeApi~tradeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Trade>}
     */
    this.tradeGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'symbol': opts['symbol'],
        'filter': opts['filter'],
        'columns': opts['columns'],
        'count': opts['count'],
        'start': opts['start'],
        'reverse': opts['reverse'],
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      var returnType = [Trade];

      return this.apiClient.callApi(
        '/trade', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tradeGetBucketed operation.
     * @callback module:api/TradeApi~tradeGetBucketedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TradeBin>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get previous trades in time buckets.
     * @param {Object} opts Optional parameters
     * @param {String} opts.binSize Time interval to bucket by. Available options: [&#39;1m&#39;, &#39;5m&#39;, &#39;1h&#39;, &#39;1d&#39;].
     * @param {String} opts.symbol Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.  You can also send a timeframe, e.g. &#x60;XBU:monthly&#x60;. Timeframes are &#x60;daily&#x60;, &#x60;weekly&#x60;, &#x60;monthly&#x60;, &#x60;quarterly&#x60;, and &#x60;biquarterly&#x60;.
     * @param {String} opts.filter Generic table filter. Send JSON key/value pairs, such as &#x60;{\&quot;key\&quot;: \&quot;value\&quot;}&#x60;. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#timestamp-filters) for more details.
     * @param {String} opts.columns Array of column names to fetch. If omitted, will return all columns.  Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.
     * @param {Number} opts.count Number of results to fetch. (default to 100)
     * @param {Number} opts.start Starting point for results. (default to 0)
     * @param {Boolean} opts.reverse If true, will sort results newest first. (default to false)
     * @param {Date} opts.startTime Starting date filter for results.
     * @param {Date} opts.endTime Ending date filter for results.
     * @param {module:api/TradeApi~tradeGetBucketedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/TradeBin>}
     */
    this.tradeGetBucketed = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'binSize': opts['binSize'],
        'symbol': opts['symbol'],
        'filter': opts['filter'],
        'columns': opts['columns'],
        'count': opts['count'],
        'start': opts['start'],
        'reverse': opts['reverse'],
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      var returnType = [TradeBin];

      return this.apiClient.callApi(
        '/trade/bucketed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
