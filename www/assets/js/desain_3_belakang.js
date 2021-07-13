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

// const download = require("./download");

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // screen.orientation.lock('potrait');
  var i = screen.orientation.lock('portrait');
  console.log('Orientation is ' + screen.orientation.type);

	 
}

////// get warna baju //////
	

	function $_GET(param) {
	  var vars = {};
	  window.location.href.replace( location.hash, '' ).replace( 
	    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
	    function( m, key, value ) { // callback
	      vars[key] = value !== undefined ? value : '';
	    }
	  );

	  if ( param ) {
	    return vars[param] ? vars[param] : null;  
	  }
	  return vars;
	}

	var id_desain = $_GET('id');

///// end get warna baju ///////

var list_desain = JSON.parse(localStorage.getItem('simpanan'));

function hapus_desain(){
	swal({
    title: "Yakin ingin Hapus Desain ini?",
    text: "Desain akan terhapus permanen dari aplikasi",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((logout) => {
    if (logout) {
    	var list_desain_baru = list_desain.filter(function(item){
			 return item['id'] != id_desain
			 // console.log(item)
			}) 
			// console.log(JSON.stringify(list_desain_baru))
			if (JSON.stringify(list_desain_baru) == '[]') {
				// console.log("desain tiada")
				localStorage.removeItem('simpanan')
				window.location.replace("desain_1.html")

			}
			else
			{
				localStorage.setItem('simpanan',JSON.stringify(list_desain_baru))
				window.location.replace("desain_1.html")
			}
    }
  });
			

}

// console.log(list_desain)
var baju_color;
var detail_desain = null;
// console.log(list_desain)
for (var i = 0; i < list_desain.length; i++) {
	// console.log(list_desain[i].id);
	if (list_desain[i].id == id_desain) {
		baju_color = list_desain[i].canvas
		detail_desain = list_desain[i].isi_belakang;
		// console.log(detail_desain)
		break;
	}
}

$("#sini_div_baju_color").attr("style","background-image: url(assets/img/"+baju_color+"2.JPG); height: 350px; width: 100%;background-size: 100% 100%;");

function toastnya(id,mesej){
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

  toastr.error("<center>"+mesej+"</center>");
  $("#"+id).focus();
}

///// responsive canvas /////
	function resizeCanvas() {
	  const outerCanvasContainer = $('#sini_div_canvas')[0];
	  
	  const ratio = canvas.getWidth() / canvas.getHeight();
	  const containerWidth   = outerCanvasContainer.clientWidth;
	  const containerHeight  = outerCanvasContainer.clientHeight;

	  const scale = containerWidth / canvas.getWidth();
	  const zoom  = canvas.getZoom() * scale;
	  canvas.setDimensions({width: containerWidth, height: outerCanvasContainer.clientHeight});
	  canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
	}

	$("#sini_div_canvas").resize(resizeCanvas);
//// end responsive canvas ///

var canvas = this.__canvas = new fabric.Canvas('c',{width: 900,height: 1050});
canvas.renderTop();
resizeCanvas();


	if (detail_desain != null) {
		for (var i = 0; i < detail_desain.length; ++i) {
			// if (detail_desain[i].kategori == 'segi_empat') {
				// segi_empat(detail_desain[i].id,detail_desain[i].angle,detail_desain[i].left,detail_desain[i].top,detail_desain[i].fill,detail_desain[i].width,detail_desain[i].heightdetail_desain[i].stroke)
			//   console.log(detail_desain[i]);
			// } 
			if (detail_desain[i].kategori == "segi_empat") {
				// console.log('ada segi empat')
				segi_empat(detail_desain[i].id,detail_desain[i].angle,detail_desain[i].left,detail_desain[i].top,detail_desain[i].fill,detail_desain[i].width,detail_desain[i].height,detail_desain[i].stroke)
			} 
			else if (detail_desain[i].kategori == "segi_tiga") {
				// console.log('ada segi empat')
				segi_tiga(detail_desain[i].id,detail_desain[i].angle,detail_desain[i].left,detail_desain[i].top,detail_desain[i].fill,detail_desain[i].width,detail_desain[i].height,detail_desain[i].stroke)
			} 
			else if (detail_desain[i].kategori == "lingkaran") {
				// console.log('ada segi empat')
				segi_lingkaran(detail_desain[i].id,detail_desain[i].angle,detail_desain[i].left,detail_desain[i].top,detail_desain[i].fill,detail_desain[i].radius,detail_desain[i].stroke,detail_desain[i].scaleX,detail_desain[i].scaleY)
			}
			else if (detail_desain[i].kategori == "free_drawing") {
				// console.log('ada segi empat')
				free_draw(detail_desain[i].id,detail_desain[i].path,detail_desain[i].left,detail_desain[i].top,detail_desain[i].height,detail_desain[i].width,detail_desain[i].stroke_width,detail_desain[i].stroke)
			}
			else if (detail_desain[i].kategori == "teks") {
				// console.log('ada segi empat')
				// tambah_teks(id,input,fill,family,top,left,width,height,scaleX,scaleY)
				tambah_teks(detail_desain[i].id,detail_desain[i].input_teks,detail_desain[i].fill,detail_desain[i].fontFamily,detail_desain[i].top,detail_desain[i].left,detail_desain[i].width,detail_desain[i].height,detail_desain[i].angle,detail_desain[i].scaleX,detail_desain[i].scaleY)
			}
			else if (detail_desain[i].kategori == "foto") {
				// console.log('ada segi empat')
				// add_image(id,base,scaleX,scaleX,left,top,angle)
				add_image(detail_desain[i].id,detail_desain[i].detail,detail_desain[i].scaleX,detail_desain[i].scaleY,detail_desain[i].left,detail_desain[i].top,detail_desain[i].angle )
			}
		}
	}
	

  


  function add_image(id,base,scaleX,scaleY,left,top,angle){

    var x = document.createElement("IMG");
    x.setAttribute("src", base);
    x.setAttribute("id", 'img_yg_terupload_'+id);
    x.async = true; 
    document.getElementById("sini_tampung_image").appendChild(x);

    setTimeout(function(){
    	var imgElement = document.getElementById('img_yg_terupload_'+id);
	    var imgInstance = new fabric.Image(imgElement, {
	      id : id,
	      left: left,
	      top: top,
	      angle: angle,
	      opacity: 1,
	      scaleX : scaleX,
	      scaleY : scaleY
	    });
	    canvas.add(imgInstance);
    }, 200)    
  }

	function segi_empat(id,angle,left,top,fillnya,width,height,stroke) {
	  var rect = new fabric.Rect({
	    id : id, 
	    // kategori : bentuk,   
	    angle:angle,
	    left: left,
	    top: top,
	    fill: fillnya,
	    width: width,
	    height: height,
	    // objectCaching: true,
	    stroke: stroke,
	    strokeWidth: 10,
	    // padding : 5
	  });
	  

	  canvas.add(rect);
	}

	function segi_tiga(id,angle,left,top,fillnya,width,height,stroke) {
	  var tri = new fabric.Triangle({
	    id : id, 
	    // kategori : bentuk,   
	    angle:angle,
	    left: left,
	    top: top,
	    fill: fillnya,
	    width: width,
	    height: height,
	    // objectCaching: true,
	    stroke: stroke,
	    strokeWidth: 10,
	    // padding : 5
	  });
	  
	  
	  canvas.add(tri);
	}

	function segi_lingkaran(id,angle,left,top,fillnya,radius,stroke,scaleX,scaleY) {
	  var cir = new fabric.Circle({
	    id : id,  
	    angle:angle,
	    left: left,
	    top: top,
	    fill: fillnya,
	    radius : radius,
	    // objectCaching: true,
	    stroke: stroke,
	    strokeWidth: 10,
	    scaleX : scaleX,
	    scaleY : scaleY
	    // padding : 5
	  });

		

	  // console.log(cir);
	  canvas.add(cir);
	}


	function free_draw(id,path,top,left,height,width,stroke_width,stroke){
	  var garis = new fabric.Path(path);

	  garis.set({
	    id : id,
	    fill: null,
	    // top: top,
	    // left: left,
	    // height: height,
	    // width: width,
	    strokeWidth: stroke_width,
	    stroke: stroke
	  });

	  canvas.add(garis);
	}

	function tambah_teks(id,input,fill,family,top,left,width,height,angle,scaleX,scaleY){
	  var text = new fabric.Text(input, { 
	    id : id,
	    angle:angle,
	    fill: fill ,
	    fontSize: 100,
	    left: left,
	    top: top,
	    width : width,
	    height : height,
	    fontFamily: family,
	    scaleX : scaleX,
	    scaleY : scaleY
	  }); 
	  console.log(text)
	  canvas.add(text); 
	}



	function desain_depan(){
		console.log(id_desain)
		window.location.href ="desain_complete.html?id="+id_desain;
	}




	function takeshot() { 
	  var div = document.getElementById('sini_div_canvas'); 
		canvas.backgroundColor=null;
		canvas.renderAll();
		var canvasnya = canvas;
	  
	  html2canvas(div).then( 
	    function (canvas) { 
	      document 
	      .getElementById('output') 
	      .appendChild(canvas); 
	      var base64URL = canvas.toDataURL('image/png');
	     
	      console.log(base64URL)
				window.location.href = base64URL;
				
	      $("#ini_untuk_share").attr('onclick',"window.plugins.socialsharing.share(null, 'Irwan T-Shirt Design', '"+base64URL+"', null)");
	      var x = document.createElement("IMG");
	      x.setAttribute("src", base64URL);
	      x.setAttribute("id", 'img_yg_terupload_'+id_desain);
	      x.async = true; 
	      document.getElementById("sini_tampung_image").appendChild(x);
		    setTimeout(function(){
				  $('#ini_untuk_share').trigger('click');
				}, 200);
				canvasnya.backgroundColor = null;
				canvasnya.renderAll();
	  }) 
	} 


	async function DownloadToDevice() {
		$.blockUI({ 
			message: "Sedang Diproses", 
			css: { 
			border: 'none', 
			padding: '15px', 
			backgroundColor: '#000', 
			'-webkit-border-radius': '10px', 
			'-moz-border-radius': '10px', 
			opacity: .5, 
			color: '#fff' 
		} });
		var div = document.getElementById('sini_div_canvas'); 
		canvas.backgroundColor=null;
		canvas.renderAll();
		await html2canvas(div).then( 
	    function (canvas) { 
	      document 
	      .getElementById('output') 
	      .appendChild(canvas); 
	      var base64URL = canvas.toDataURL('image/png');
				$.ajax({
					url: "http://irwan.kuwakuwi.com/",
					type: 'post',
					data: {proses : "ambil_gambar" , base64 : base64URL, id : "desain_belakang"+id_desain},
					beforeSend: function(res) {
						
					},
					success:  function  (response) {
						console.log(response);
						
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) { 
						console.log(errorThrown)
						
					
					} 
				});
	      
	  })

		


		await sleep(3000);
		ambil_foto();
		
	}

	function ambil_foto(){
		var blob = null;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://irwan.kuwakuwi.com/"+"desain_belakang"+id_desain+".png");
		xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
		xhr.onload = function()
		{
				blob = xhr.response;//xhr.response is now a blob object
				console.log(blob);
				var storageLocation = "";
			//  switch (device.platform) {
			// 		 case "Android":
							 storageLocation = 'file:///storage/emulated/0/';
			// 				 break;
			// 		 case "iOS":
			// 				 storageLocation = cordova.file.documentsDirectory;
			// 				 break;
			//  }
			 var folderpath = storageLocation + "Download";
			 var filename = "desain_belakang"+id_desain+".png";
			 var DataBlob = blob;
				window.resolveLocalFileSystemURL(folderpath, function(dir) {
					dir.getFile(filename, {create:true}, function(file) {
						file.createWriter(function(fileWriter) {
							fileWriter.write(DataBlob);
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
						
							toastr.success("<center>Desain Baju Berhasil Disimpan di Folder <b><i>Download</i></b></center>");
							//Download was succesfull
						}, function(err){
							// failed
							console.log(err);
						});
					});
				});
		}
		xhr.send();
		$.unblockUI();
		canvas.backgroundColor = null;
		canvas.renderAll();
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}