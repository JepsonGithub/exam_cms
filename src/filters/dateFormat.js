import moment from "moment"

export default function( value, str ) {
  return moment( value ).format( str || "YYYY-MM-DD HH:mm:SS");
}