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

package com.wordnik.client.model

import java.math.BigDecimal
import java.util.Date


case class TradeBin (
  timestamp: Option[Date],
symbol: Option[String],
open: Option[Double],
high: Option[Double],
low: Option[Double],
close: Option[Double],
trades: Option[BigDecimal],
volume: Option[BigDecimal],
vwap: Option[Double],
lastSize: Option[BigDecimal],
turnover: Option[BigDecimal],
homeNotional: Option[Double],
foreignNotional: Option[Double],
id: Option[Double]
)
