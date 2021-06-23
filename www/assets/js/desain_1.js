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

var color = null;

function changecolor(e){
	color = e;
}

function lanjut(){
	if (color == null) {
		// console.log("Tiada Baju");
		toastr.options = {
	    "closeButton": true,
	    "debug": false,
	    "progressBar": true,
	    "positionClass": "toast-top-right",
	    "showDuration": "300",
	    "hideDuration": "1000",
	    "timeOut": "5000",
	    "extendedTimeOut": "1000",
	    "showEasing": "swing",
	    "hideEasing": "linear",
	    "showMethod": "fadeIn",
	    "hideMethod": "fadeOut"
	  };

	  toastr.error("<center>Warna Baju Harus Terpilih Terlebih Dahulu</center>");
	  $("#pilih_baju_select").focus();
	}
	else
	{
		window.location.replace("desain_2.html?color="+color)
	}
}
