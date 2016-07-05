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

import com.wordnik.client.api._
import akka.actor.ActorSystem
import io.swagger.app.{ResourcesApp, SwaggerApp}
import javax.servlet.ServletContext
import org.scalatra.LifeCycle

class ScalatraBootstrap extends LifeCycle {
  implicit val swagger = new SwaggerApp

  override def init(context: ServletContext) {
    implicit val system = ActorSystem("appActorSystem")
    try {
      context mount (new AnnouncementApi, "/Announcement/*")
      context mount (new ApiKeyApi, "/ApiKey/*")
      context mount (new ChatApi, "/Chat/*")
      context mount (new ExecutionApi, "/Execution/*")
      context mount (new FundingApi, "/Funding/*")
      context mount (new InstrumentApi, "/Instrument/*")
      context mount (new InsuranceApi, "/Insurance/*")
      context mount (new LeaderboardApi, "/Leaderboard/*")
      context mount (new LiquidationApi, "/Liquidation/*")
      context mount (new OrderApi, "/Order/*")
      context mount (new OrderBookApi, "/OrderBook/*")
      context mount (new PositionApi, "/Position/*")
      context mount (new QuoteApi, "/Quote/*")
      context mount (new SchemaApi, "/Schema/*")
      context mount (new SettlementApi, "/Settlement/*")
      context mount (new StatsApi, "/Stats/*")
      context mount (new TradeApi, "/Trade/*")
      context mount (new UserApi, "/User/*")
      
      context mount (new ResourcesApp, "/api-docs/*")
    } catch {
      case e: Throwable => e.printStackTrace()
    }
  }
}