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


package io.swagger.client.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import org.joda.time.LocalDate;


/**
 * Trade
 */
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-07-05T09:40:48.217-05:00")
public class Trade   {
  @JsonProperty("timestamp")
  private LocalDate timestamp = null;

  @JsonProperty("symbol")
  private String symbol = null;

  @JsonProperty("side")
  private String side = null;

  @JsonProperty("size")
  private BigDecimal size = null;

  @JsonProperty("price")
  private Double price = null;

  @JsonProperty("tickDirection")
  private String tickDirection = null;

  @JsonProperty("trdMatchID")
  private String trdMatchID = null;

  @JsonProperty("grossValue")
  private BigDecimal grossValue = null;

  @JsonProperty("homeNotional")
  private Double homeNotional = null;

  @JsonProperty("foreignNotional")
  private Double foreignNotional = null;

  @JsonProperty("id")
  private Double id = null;

  public Trade timestamp(LocalDate timestamp) {
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Get timestamp
   * @return timestamp
  **/
  @ApiModelProperty(example = "null", value = "")
  public LocalDate getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(LocalDate timestamp) {
    this.timestamp = timestamp;
  }

  public Trade symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Get symbol
   * @return symbol
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getSymbol() {
    return symbol;
  }

  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }

  public Trade side(String side) {
    this.side = side;
    return this;
  }

   /**
   * Get side
   * @return side
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getSide() {
    return side;
  }

  public void setSide(String side) {
    this.side = side;
  }

  public Trade size(BigDecimal size) {
    this.size = size;
    return this;
  }

   /**
   * Get size
   * @return size
  **/
  @ApiModelProperty(example = "null", value = "")
  public BigDecimal getSize() {
    return size;
  }

  public void setSize(BigDecimal size) {
    this.size = size;
  }

  public Trade price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Get price
   * @return price
  **/
  @ApiModelProperty(example = "null", value = "")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public Trade tickDirection(String tickDirection) {
    this.tickDirection = tickDirection;
    return this;
  }

   /**
   * Get tickDirection
   * @return tickDirection
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getTickDirection() {
    return tickDirection;
  }

  public void setTickDirection(String tickDirection) {
    this.tickDirection = tickDirection;
  }

  public Trade trdMatchID(String trdMatchID) {
    this.trdMatchID = trdMatchID;
    return this;
  }

   /**
   * Get trdMatchID
   * @return trdMatchID
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getTrdMatchID() {
    return trdMatchID;
  }

  public void setTrdMatchID(String trdMatchID) {
    this.trdMatchID = trdMatchID;
  }

  public Trade grossValue(BigDecimal grossValue) {
    this.grossValue = grossValue;
    return this;
  }

   /**
   * Get grossValue
   * @return grossValue
  **/
  @ApiModelProperty(example = "null", value = "")
  public BigDecimal getGrossValue() {
    return grossValue;
  }

  public void setGrossValue(BigDecimal grossValue) {
    this.grossValue = grossValue;
  }

  public Trade homeNotional(Double homeNotional) {
    this.homeNotional = homeNotional;
    return this;
  }

   /**
   * Get homeNotional
   * @return homeNotional
  **/
  @ApiModelProperty(example = "null", value = "")
  public Double getHomeNotional() {
    return homeNotional;
  }

  public void setHomeNotional(Double homeNotional) {
    this.homeNotional = homeNotional;
  }

  public Trade foreignNotional(Double foreignNotional) {
    this.foreignNotional = foreignNotional;
    return this;
  }

   /**
   * Get foreignNotional
   * @return foreignNotional
  **/
  @ApiModelProperty(example = "null", value = "")
  public Double getForeignNotional() {
    return foreignNotional;
  }

  public void setForeignNotional(Double foreignNotional) {
    this.foreignNotional = foreignNotional;
  }

  public Trade id(Double id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "null", value = "")
  public Double getId() {
    return id;
  }

  public void setId(Double id) {
    this.id = id;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Trade trade = (Trade) o;
    return Objects.equals(this.timestamp, trade.timestamp) &&
        Objects.equals(this.symbol, trade.symbol) &&
        Objects.equals(this.side, trade.side) &&
        Objects.equals(this.size, trade.size) &&
        Objects.equals(this.price, trade.price) &&
        Objects.equals(this.tickDirection, trade.tickDirection) &&
        Objects.equals(this.trdMatchID, trade.trdMatchID) &&
        Objects.equals(this.grossValue, trade.grossValue) &&
        Objects.equals(this.homeNotional, trade.homeNotional) &&
        Objects.equals(this.foreignNotional, trade.foreignNotional) &&
        Objects.equals(this.id, trade.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(timestamp, symbol, side, size, price, tickDirection, trdMatchID, grossValue, homeNotional, foreignNotional, id);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Trade {\n");
    
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    side: ").append(toIndentedString(side)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    tickDirection: ").append(toIndentedString(tickDirection)).append("\n");
    sb.append("    trdMatchID: ").append(toIndentedString(trdMatchID)).append("\n");
    sb.append("    grossValue: ").append(toIndentedString(grossValue)).append("\n");
    sb.append("    homeNotional: ").append(toIndentedString(homeNotional)).append("\n");
    sb.append("    foreignNotional: ").append(toIndentedString(foreignNotional)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

