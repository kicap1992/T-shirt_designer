/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // screen.orientation.lock('potrait');
  var i = screen.orientation.lock('portrait');
  console.log('Orientation is ' + screen.orientation.type);


}

var list_desain = JSON.parse(localStorage.getItem('simpanan'));
console.log(list_desain)
var html = '';
if (list_desain == null) {
	html += '<center><h2 style="font-family: Pacifico">Anda Belum Pernah Mendesain</h2>'
	html += '<a href="desain_1.html" class="btn-about" style="font-family: Pacifico">Mulai Mendesain</a></center>'
	$("#sini_divnya").html(html)
}
else
{
	for (var i = 0; i < list_desain.length; i++) {
		ii = i + 1;
		var warna;
		switch (list_desain[i].canvas){
			case "white":
				warna = "Putih";
				break;
			case "black":
				warna = "Hitam";
				break;
			case "red":
				warna = "Merah";
				break;
			case "blue":
				warna = "Biru";
				break;
			case "yellow":
				warna = "kuning";
		}	
		html += '<div class="form-group">'+
	            '<table width="100%">'+
	              '<tr align="center">'+
	                '<td><label style="font-size: 16px;font-family: Pacifico">Desain '+ii+'</label></td>'+
	                '<td><label style="font-size: 16px ; font-family: Pacifico"><i>(Baju '+warna+')</i></label></td>'+
	                '<td><a href="desain_complete.html?id='+list_desain[i].id+'" class="btn btn-info btn-sm" style="font-family: Pacifico;display: inline-block; ">Lihat Desain</a></td>'+
	              '</tr>'+
	            '</table>'+
	          '</div>'+
	          '<hr>';
	  $("#sini_divnya").html(html)
	}
}