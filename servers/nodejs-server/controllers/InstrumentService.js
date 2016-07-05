'use strict';

exports.instrument.get = function(args, res, next) {
  /**
   * parameters expected in the args:
  * symbol (String)
  * filter (String)
  * columns (String)
  * count (BigDecimal)
  * start (BigDecimal)
  * reverse (Boolean)
  * startTime (date)
  * endTime (date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2000-01-23T04:56:07.000+00:00",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2000-01-23T04:56:07.000+00:00",
  "calcInterval" : "2000-01-23T04:56:07.000+00:00",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2000-01-23T04:56:07.000+00:00",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2000-01-23T04:56:07.000+00:00",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2000-01-23T04:56:07.000+00:00",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingInterval" : "2000-01-23T04:56:07.000+00:00",
  "listing" : "2000-01-23T04:56:07.000+00:00",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "openingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2000-01-23T04:56:07.000+00:00",
  "rebalanceInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.instrument.getActive = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2000-01-23T04:56:07.000+00:00",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2000-01-23T04:56:07.000+00:00",
  "calcInterval" : "2000-01-23T04:56:07.000+00:00",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2000-01-23T04:56:07.000+00:00",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2000-01-23T04:56:07.000+00:00",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2000-01-23T04:56:07.000+00:00",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingInterval" : "2000-01-23T04:56:07.000+00:00",
  "listing" : "2000-01-23T04:56:07.000+00:00",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "openingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2000-01-23T04:56:07.000+00:00",
  "rebalanceInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.instrument.getActiveAndIndices = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2000-01-23T04:56:07.000+00:00",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2000-01-23T04:56:07.000+00:00",
  "calcInterval" : "2000-01-23T04:56:07.000+00:00",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2000-01-23T04:56:07.000+00:00",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2000-01-23T04:56:07.000+00:00",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2000-01-23T04:56:07.000+00:00",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingInterval" : "2000-01-23T04:56:07.000+00:00",
  "listing" : "2000-01-23T04:56:07.000+00:00",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "openingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2000-01-23T04:56:07.000+00:00",
  "rebalanceInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.instrument.getActiveIntervals = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "intervals" : [ "aeiou" ],
  "symbols" : [ "aeiou" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.instrument.getIndices = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2000-01-23T04:56:07.000+00:00",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2000-01-23T04:56:07.000+00:00",
  "calcInterval" : "2000-01-23T04:56:07.000+00:00",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2000-01-23T04:56:07.000+00:00",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2000-01-23T04:56:07.000+00:00",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2000-01-23T04:56:07.000+00:00",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingInterval" : "2000-01-23T04:56:07.000+00:00",
  "listing" : "2000-01-23T04:56:07.000+00:00",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "openingTimestamp" : "2000-01-23T04:56:07.000+00:00",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2000-01-23T04:56:07.000+00:00",
  "rebalanceInterval" : "2000-01-23T04:56:07.000+00:00",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

