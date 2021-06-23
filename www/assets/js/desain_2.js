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

	var color = $_GET('color');


	$("#sini_div_baju_color").attr("style","background-image: url(assets/img/"+color+".PNG); height: 350px; width: 100%;background-size: 100% 100%;");
///// end get warna baju ///////

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

////// ini icon delete //////
	var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

	var img = document.createElement('img');
	img.src = deleteIcon;
//// end icon delete /////

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

var canvas = this.__canvas = new fabric.Canvas('c',{width: 900,
          height: 1050});
// var canvas = new fabric.Canvas('c',{backgroundColor : "red"});
// canvas.backgroundColor= color;
canvas.renderTop();

canvas.isDrawingMode = false;



resizeCanvas();

var drawing_width = 1; // ini utk drawing width
var drawing_color = null; // ini utk drawing color

///// ini change div editor /////
	function change_editor(e){
		if (e == 'bentuk') {
			canvas.isDrawingMode = false;
			$("#div_upload_image").attr('style','display : none')
			var html= '<div class="pacific form-group">'+
									'<label>Bentuk</label>'+
									'<select class="form-control" onchange="change_persegi(1,value)" id="select_bentuk">'+
										'<option disabled="" selected="">-Pilih Bentuk Persegi</option>'+
										'<option value="rect">Segi Empat</option>'+
										'<option value="tri">Segi Tiga</option>'+
										'<option value="cir">Lingkaran</option>'+
									'</select>'+
								'</div>'+
								'<div class="pacific form-group">'+
									'<label>Fill Color</label>'+
									'<select class="form-control" onchange="change_persegi(2,value)">'+
										'<option disabled="" selected="">-Fill Color</option>'+
										'<option value="no_color">Transparan</option>'+
										'<option value="black">Hitam</option>'+
										'<option value="white">Putih</option>'+
										'<option value="red">Merah</option>'+
										'<option value="blue">Biru</option>'+
										'<option value="yellow">Kuning</option>'+
									'</select>'+
								'</div>'+
								'<div class="pacific form-group">'+
									'<label>Stroke Color</label>'+
									'<select class="form-control" onchange="change_persegi(3,value)">'+
										'<option disabled="" selected="">-Stroke Color</option>'+
										'<option value="black">Hitam</option>'+
										'<option value="white">Putih</option>'+
										'<option value="red">Merah</option>'+
										'<option value="blue">Biru</option>'+
										'<option value="yellow">Kuning</option>'+
									'</select>'+
								'</div>'+
								// '<div class="form-group">'+
								// 	'<label>Stroke Width</label>'+
								// 	'<input class="form-control" type="range" onchange="change_persegi(4,value)" value="1" min="1" max="20" style="display: block">'+
								// '</div>'+
								'<div class="pacific form-group" style="text-align:center">'+
									'<button onclick="add_bentuk()" class="btn btn-info" style="font-weight: bold;">Tambah Bentuk</button>'
								'</div>';
			$("#sini_div_editor").html(html)
			canvas.isDrawingMode = false;
		}
		if (e == 'drawing') {
			canvas.isDrawingMode = false;
			$("#div_upload_image").attr('style','display : none')
			drawing_color = null;
			drawing_width = 1;
			var html= '<div class="pacific form-group">'+
									'<label>Drawing Color</label>'+
									'<select class="form-control" onchange="free_drawing(1,value)" id="select_drawing_color">'+
										'<option disabled="" selected="">-Drawing Color</option>'+
										'<option value="black">Hitam</option>'+
										'<option value="white">Putih</option>'+
										'<option value="red">Merah</option>'+
										'<option value="blue">Biru</option>'+
										'<option value="yellow">Kuning</option>'+
									'</select>'+
								'</div>'+
								'<div class="pacific form-group">'+
									'<label>Drawing Width</label>'+
									'<input class="form-control" type="range" onchange="free_drawing(2,value)" value="1" min="1" max="20" style="display: block">'+
								'</div>'+
								'<div class="pacific form-group" style="text-align:center">'+
									'<button onclick="add_drawing()" class="btn btn-info" style="font-weight: bold;">Tambah Drawing</button>'
								'</div>';
			$("#sini_div_editor").html(html)
			
		}
		if (e == 'teks') {
			canvas.isDrawingMode = false;
			$("#div_upload_image").attr('style','display : none')
			drawing_color = null;
			drawing_width = 1;
			var html= '<div class="pacific form-group">'+
									'<label>Inputan Teks</label>'+
										// '<input class="form-control" type="teks" id="input_teks" oninput="teks_input(1,value)" >'+
										'<textarea class="form-control" id="input_teks" oninput="teks_input(1,value)"></textarea>'+
								'</div>'+
								'<div class="pacific form-group">'+
									'<label>Teks Font</label>'+
									'<select class="form-control" onchange="teks_input(2,value)" id="select_teks_font">'+
										'<option disabled="" selected="">-Pilih Teks Font</option>'+
										'<option value="Times" style="font-family : Times">Times</option>'+
										'<option value="Arial" style="font-family : Arial">Arial</option>'+
										'<option value="Metal Mania" style="font-family : Metal Mania">Metal Mania</option>'+
										'<option value="Pacifico">Pacifico</option>'+
									'</select>'+
								'</div>'+
								'<div class="pacific form-group">'+
									'<label>Teks Color</label>'+
									'<input class="form-control" type="color" onchange="teks_input(3,value)" value="black" >'+
								'</div>'+
								'<div class="pacific form-group" style="text-align:center">'+
									'<button onclick="add_teks()" class="btn btn-info" style="font-weight: bold;">Tambah Teks</button>'
								'</div>';
			$("#sini_div_editor").html(html)
			
		}
		if (e == 'image') {
			canvas.isDrawingMode = false;
			$("#div_upload_image").attr('style','display : block')
			image_base64 = null;
			$("#sini_div_editor").html(null)
			
		}
	}
//// end change div editor ////


var idnya = 1; // ini id tiap object
var save_data = null; // ini data editor

////// render icon delete supaya bole delete //////
	fabric.Object.prototype.controls.deleteControl = new fabric.Control({
	  x: 0.5,
	  y: -0.5,
	  offsetY: 16,
	  cursorStyle: 'pointer',
	  mouseUpHandler: deleteObject,
	  render: renderIcon,
	  cornerSize: 24
	});


	function deleteObject(eventData, target) {

		var datanya = JSON.parse(save_data);
		console.log(target);
		// datanya.filter(function(item){ console.log(item) }) 
		var myNewArray = datanya.filter(function(item){ return item['id'] != target['id'] }) 
		myNewArray = JSON.stringify(myNewArray)
		if (myNewArray == "[]") {
			myNewArray = null;
		}
		save_data = myNewArray
		console.log(JSON.parse(save_data));

		if (save_data == null) {
			$("#save_datanya11").attr('disabled','');
		}

	  var canvas = target.canvas;
	  canvas.remove(target);
	  canvas.requestRenderAll();
	}

	function renderIcon(ctx, left, top, styleOverride, fabricObject) {
	  var size = this.cornerSize;
	  ctx.save();
	  ctx.translate(left, top);
	  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
	  ctx.drawImage(img, -size/2, -size/2, size, size);
	  ctx.restore();
	}
////// end render icon delete //////

//// ini untuk bentuk persegi ////
	var variable_segi = null;
	function change_persegi(kat,nilai){
		var segi;
		if (variable_segi == null) {
			if (kat == 1) {
				segi = [{"segi" : nilai ,"fill" : '' , 'stroke' :  '' }];
			}
			else if (kat == 2) {
				segi = [{"segi" : '' ,"fill" : nilai , 'stroke' :  '' }];
			}

			else if (kat == 3) {
				segi = [{"segi" : '' ,"fill" : '' , 'stroke' :  nilai }];
			}

			

			variable_segi = JSON.stringify(segi)
		}
		else
		{
			// console.log(variable_segi)
			variable_segi = JSON.parse(variable_segi);
			// console.log(variable_segi)
			if (kat == 1) {
				variable_segi[0].segi = nilai;
			}
			else if (kat == 2) {
				variable_segi[0].fill = nilai;
			}
			else if (kat == 3) {
				variable_segi[0].stroke = nilai;
			}
			
			variable_segi = JSON.stringify(variable_segi)
			// console.log(variable_segi)
			
		}
	}

	function add_bentuk(){
		if (variable_segi == null) {
			toastnya('select_bentuk','Bentuk Harus Terpilih');
		}
		else
		{
			var segi = JSON.parse(variable_segi);
			if (segi[0].segi == '' || segi[0].segi == null || segi[0].fill == '' || segi[0].fill == null || segi[0].stroke == '' || segi[0].stroke == null ) {
				toastnya('select_bentuk','Semua Pilihan Harus DIpilih');
			}
			else
			{
				var fillnya;
				if (segi[0].fill == 'no_color') {
					fillnya = 'rgba(0,0,0,0)'
				}
				else
				{
					fillnya = segi[0].fill
				}

				if (segi[0].segi == 'rect') {
					segi_empat(fillnya,segi[0].stroke,'segi_empat');
					// console.log(segi[0].stroke_width)
				}
				else if (segi[0].segi == 'tri') {
					segi_tiga(fillnya,segi[0].stroke,'segi_tiga');
					// console.log(segi[0].stroke_width)
				}
				else if (segi[0].segi == 'cir') {
					segi_lingkaran(fillnya,segi[0].stroke,'lingkaran');
					// console.log(segi[0].stroke_width)
					
				}

				// variable_segi = null;
				// $("#sini_div_editor").html(null)
				document.getElementById("back_to_top").click();
				// $("#editor_select").val($("#editor_select option:first").val());

			}

		}
	}

	function segi_empat(fillnya,stroke,bentuk) {
	  var rect = new fabric.Rect({
	    id : idnya, 
	    kategori : bentuk,   
	    angle:0,
	    left: 400,
	    top: 350,
	    fill: fillnya,
	    width: 200,
	    height: 200,
	    // objectCaching: true,
	    stroke: stroke,
	    strokeWidth: 10,
	    // padding : 5
	  });
	  
	  
		var datanya = [{"id" : idnya ,"kategori" : bentuk, "left" :  400 , "top" :  350, "width" : 200 , "height" : 200 , "angle" :0 , "fill" : fillnya , "stroke" : stroke }];  

		if (save_data == null) {
	  	datanya = JSON.stringify(datanya);
	  	save_data = datanya;
	  	// console.log(JSON.parse(save_data))
	  }
	  else
	  {
	  	save_data = JSON.parse(save_data);
	  	save_data = save_data.concat(datanya)
	  	save_data = JSON.stringify(save_data);
	  	// console.log(JSON.parse(save_data))
	  	// console.log(save_data)
	  }


	  canvas.add(rect);
	  canvas.setActiveObject(rect);
	  idnya = idnya + 1;
	  $("#save_datanya11").removeAttr('disabled');
	}

	function segi_tiga(fillnya,stroke,bentuk) {
	  var tri = new fabric.Triangle({
	    id : idnya,    
	    kategori : bentuk,
	    angle:0,
	    left: 400,
	    top: 350,
	    fill: fillnya,
	    width: 200,
	    height: 200,
	    // objectCaching: true,
	    stroke: stroke,
	    strokeWidth: 10,
	    // padding : 5
	  });
	  
	  var datanya = [{"id" : idnya ,"kategori" : bentuk, "left" :  400 , "top" :  350, "width" : 200 , "height" : 200 , "angle" :0 , "fill" : fillnya , "stroke" : stroke }]; 

	  if (save_data == null) {
	  	datanya = JSON.stringify(datanya);
	  	save_data = datanya;
	  	// console.log(JSON.parse(save_data))
	  }
	  else
	  {
	  	save_data = JSON.parse(save_data);
	  	save_data = save_data.concat(datanya)
	  	save_data = JSON.stringify(save_data);
	  	// console.log(JSON.parse(save_data))
	  	// console.log(save_data)
	  }

	  canvas.add(tri);
	  canvas.setActiveObject(tri);
	  idnya = idnya + 1;
	  $("#save_datanya11").removeAttr('disabled');
	}

	function segi_lingkaran(fillnya,stroke,bentuk) {
	  var cir = new fabric.Circle({
	    id : idnya,  
	    kategori : bentuk,  
	    angle:0,
	    left: 400,
	    top: 350,
	    fill: fillnya,
	    radius : 200,
	    // objectCaching: true,
	    stroke: stroke,
	    strokeWidth: 10,
	    // padding : 5
	  });

		var datanya = [{"id" : idnya ,"kategori" : bentuk, "left" :  400 , "top" :  350, "radius" : 200 , "angle" :0 , "fill" : fillnya , "stroke" : stroke , "scaleX" : 1, "scaleY" : 1}]; 

	  if (save_data == null) {
	  	datanya = JSON.stringify(datanya);
	  	save_data = datanya;
	  	// console.log(JSON.parse(save_data))
	  }
	  else
	  {
	  	save_data = JSON.parse(save_data);
	  	save_data = save_data.concat(datanya)
	  	save_data = JSON.stringify(save_data);
	  	// console.log(JSON.parse(save_data))
	  	// console.log(save_data)
	  }

	  console.log(cir);
	  canvas.add(cir);
	  canvas.setActiveObject(cir);
	  idnya = idnya + 1;
	  $("#save_datanya11").removeAttr('disabled');
	}
//// end untuk bentuk persegi ////

//// ini untuk free drawing ////
	function free_drawing(kat,nilai){
		// console.log(kat,nilai)
		var draw;
		if (kat == 1) {
			drawing_color = nilai;
		}
		else if (kat == 2) {
			drawing_width = nilai;
		}
	}

	function add_drawing(){
		// console.log(variable_free_drawing)
		if (drawing_color == null) {
			toastnya('select_drawing_color','Warna Harus Dipilih');
		}
		else
		{
			// console.log("jalankan")
			// drawing = JSON.parse(variable_free_drawing)
			canvas.isDrawingMode = true;
			canvas.freeDrawingBrush.width = drawing_width;
			canvas.freeDrawingBrush.color = drawing_color;
			// variable_segi = null;
			var html = '<div class="pacific form-group" style="text-align:center">'+
									'<button onclick="stop_drawing()" class="btn btn-warning" style="font-weight: bold;">Stop Drawing</button>'
								'</div>';
			$("#sini_div_editor").html(html)
			document.getElementById("back_to_top").click();
			$("#editor_select").val($("#editor_select option:first").val());

			
		}
	}

	canvas.on('path:created', function(opt) {
	  // opt.path is a fabric.Path ready to use and already on the canvas
	  // console.log(opt.path instanceof fabric.Path)
	  // this is the path data
	  // console.log(opt.path);
	  // console.log(JSON.stringify(opt.path.path));
	  var path = opt.path.path.map(chunk => {return chunk.join(' ');}).join(' ');
	  // console.log(opt.path.height)
	  console.log(opt.path)
	  var datanya = [{"id" : idnya ,"kategori" : 'free_drawing', "path" : path , "left" :  opt.path.left , "top" :  opt.path.top, "width" : opt.path.width , "height" : opt.path.height , "stroke_width" : opt.path.strokeWidth , "stroke" : opt.path.stroke }];  
	  console.log(datanya)
	  opt.path.idnya = fabric.Object.__uid++
	  opt.path.id = idnya

		if (save_data == null) {
	  	datanya = JSON.stringify(datanya);
	  	save_data = datanya;
	  	// console.log(JSON.parse(save_data))
	  	console.log(save_data)
	  }
	  else
	  {
	  	save_data = JSON.parse(save_data);
	  	save_data = save_data.concat(datanya)
	  	save_data = JSON.stringify(save_data);
	  	// console.log(JSON.parse(save_data))
	  	console.log(save_data)
	  }
	  idnya = idnya + 1;
	  $("#save_datanya11").removeAttr('disabled');

	});

	function stop_drawing(){
		canvas.isDrawingMode = false;
		$("#sini_div_editor").html(null)
		document.getElementById("back_to_top").click();
	}

	// function hapus_path() {
	// 	canvas.getObjects('path').forEach((path) => {
	// 	  // if(path.senderId === client.id){
	// 	    canvas.remove(path);
	// 	  // }
	// 	});
	// }
		
//// end utk free drawing ////

//// ini utk input teks ////
	var teks_inputan = null;
	var teks_font = null;
	var teks_color = "black";

	function teks_input(kat,nilai){
		// console.log(kat,nilai)
		if (kat == 1) {
			teks_inputan = nilai;
		}
		else if (kat == 2) {
			teks_font = nilai;
			// console.log(teks_font)
		}
		else if (kat == 3) {
			teks_color = nilai;
		}
	}

	function add_teks(){
		// console.log(variable_free_drawing)
		if (teks_inputan == null) {
			toastnya('input_teks','Inputan Harus Terisi');
		}
		else if (teks_font == null) {
			toastnya('select_teks_font','Font Harus Terpilih');
		}
		else
		{
			tambah_teks(teks_inputan,teks_color,teks_font)
			document.getElementById("back_to_top").click();
		}
	}

	function tambah_teks(input,fill,family){
		var text = new fabric.Text(input, { 
			id : idnya,
		  fill: fill ,
		  fontSize: 100,
		  left: 400,
	    top: 350,
		  fontFamily: family,
		}); 

		var datanya = [{"id" : idnya ,"kategori" : "teks", "input_teks" : input,  "left" :  400 , "top" :  350, "width" : "" , "height" : "200" , "angle" :0 , "fill" : fill , "fontFamily" : family  , "angle" : 0 , "scaleX" : 1, "scaleY" : 1}];  

		if (save_data == null) {
	  	datanya = JSON.stringify(datanya);
	  	save_data = datanya;
	  	// console.log(JSON.parse(save_data))
	  }
	  else
	  {
	  	save_data = JSON.parse(save_data);
	  	save_data = save_data.concat(datanya)
	  	save_data = JSON.stringify(save_data);
	  	// console.log(JSON.parse(save_data))
	  	// console.log(save_data)
	  }

	  // text
		// Render the Text on Canvas 
		// console.log(text.kategori);
		text.kategori = "teks"
		console.log(text)
		canvas.add(text); 
		canvas.setActiveObject(text);
		idnya = idnya + 1;
		$("#save_datanya11").removeAttr('disabled');
	}
//// end utk input teks //// 

//// ini utk upload image ////
	var image_base64 = null;

	$("#input_upload_image").change(function(){
	    readImage( this );
	    // console.log("berubah")
	    // console.log(image_base64)
	});

	function readImage(input) {
    if ( input.files && input.files[0] ) {
      var FR= new FileReader();
      var size = input.files[0].size / 1024
      var type = input.files[0].type;
      

      // console.log(size)
      console.log(type)
      if (size > 1500) {
      	toastnya("input_upload_image","Image yang diupload maksimal 1,4 MB")
      	$("#input_upload_image").val(null)
      	image_base64 = null
      }

      else if (type != 'image/jpeg' && type != 'image/png') {
      	toastnya("input_upload_image","File yang diupload harus berekstensi foto")
      	$("#input_upload_image").val(null)
      	image_base64 = null
      }
      else
      {
      	FR.onload = function(e) {
					// $('#img').attr( "src", e.target.result );
					// $('#base').text( e.target.result );
					// console.log(e.target.result)
					// simpan_image(e.target.result)
					image_base64 = e.target.result
					
	      };       
	      FR.readAsDataURL( input.files[0] );
      }
    }
	}

	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}


	function add_image(){

		var x = document.createElement("IMG");
  	x.setAttribute("src", image_base64);
  	x.setAttribute("id", 'img_yg_terupload_'+idnya);
  	x.async = true; 
  	document.getElementById("sini_tampung_image").appendChild(x);
  	// await sleep(500);
  	setTimeout(function(){
		  console.log("heheheh dulu")
		  var imgElement = document.getElementById('img_yg_terupload_'+idnya);
			var imgInstance = new fabric.Image(imgElement, {
				id : idnya,
			  left: 400,
			  top: 350,
			  angle: 0,
			  opacity: 1
			});
			imgInstance.kategori = "foto"
			canvas.add(imgInstance);
			canvas.setActiveObject(imgInstance);
			var datanya = [{"id" : idnya ,"kategori" : "foto", "detail" : image_base64, "scaleX" : 1 , "scaleY" : 1 ,  "left" :  400 , "top" :  350, "angle" :0  }];  
			if (save_data == null) {
		  	datanya = JSON.stringify(datanya);
		  	save_data = datanya;
		  	// console.log(JSON.parse(save_data))
		  }
		  else
		  {
		  	save_data = JSON.parse(save_data);
		  	save_data = save_data.concat(datanya)
		  	save_data = JSON.stringify(save_data);
		  	// console.log(JSON.parse(save_data))
		  	// console.log(save_data)
		  }
			idnya = idnya + 1;
			document.getElementById("back_to_top").click();
			$("#save_datanya11").removeAttr('disabled');
		}, 200);

		
	}

	// function try_remove(){
	// 	document.getElementById("img_yg_terupload_1").remove();
	// 	 // var elem = document.getElementById(id);
	// }
//// end utk upload image ////

//// sini canvas event /////
	canvas.on('object:moved', function(options) {
	  // console.log(options)
	  var obj = canvas.getActiveObject();
	  var datanya = JSON.parse(save_data);
	  var id;

	  for (var i = 0; i < datanya.length; ++i) {
	    if (datanya[i].id == options['target']['id']) {
	      id = i;
	      break;
	    }   
	  }


	  if (options['target']['kategori'] == 'segi_empat' || options['target']['kategori'] == 'segi_tiga' ) {
	  	datanya[id].angle = options['target']['angle'];
	  	datanya[id].height = Math.floor(obj.getScaledHeight());
	  	datanya[id].left = options['target']['left'];
	  	datanya[id].top = options['target']['top'];
	  	datanya[id].width = Math.floor(obj.getScaledWidth());
	  }

	  if (options['target']['kategori'] == 'foto' || options['target']['kategori'] == 'teks' || options['target']['kategori'] == 'lingkaran' ) {
	  	// console.log(options['target'])
	  	datanya[id].angle = options['target']['angle'];
	  	datanya[id].height = Math.floor(obj.getScaledHeight());
	  	datanya[id].left = options['target']['left'];
	  	datanya[id].top = options['target']['top'];
	  	datanya[id].scaleY = options['target']['scaleY'];
	  	datanya[id].scaleX = options['target']['scaleX'];
	  	datanya[id].width = Math.floor(obj.getScaledWidth());
	  }


	  save_data = JSON.stringify(datanya);
	  // console.log(JSON.parse(save_data) )
	  // console.log(save_data)
	  // console.log(options['target']['kategori'])
	  // simpan(datanya,'update',kategori,id);
	});

	canvas.on('object:rotated', function(options) {
		// console.log(options)
	  var obj = canvas.getActiveObject();
	  var datanya = JSON.parse(save_data);
	  var id;

	  for (var i = 0; i < datanya.length; ++i) {
	    if (datanya[i].id == options['target']['id']) {
	      id = i;
	      break;
	    }   
	  }


	  if (options['target']['kategori'] == 'segi_empat' || options['target']['kategori'] == 'segi_tiga' ) {
	  	datanya[id].angle = options['target']['angle'];
	  	datanya[id].height = Math.floor(obj.getScaledHeight());
	  	datanya[id].left = options['target']['left'];
	  	datanya[id].top = options['target']['top'];
	  	datanya[id].width = Math.floor(obj.getScaledWidth());
	  }

	  if (options['target']['kategori'] == 'foto' || options['target']['kategori'] == 'teks' || options['target']['kategori'] == 'lingkaran' ) {
	  	// console.log(options['target'])
	  	datanya[id].angle = options['target']['angle'];
	  	datanya[id].height = Math.floor(obj.getScaledHeight());
	  	datanya[id].left = options['target']['left'];
	  	datanya[id].top = options['target']['top'];
	  	datanya[id].scaleY = options['target']['scaleY'];
	  	datanya[id].scaleX = options['target']['scaleX'];
	  	datanya[id].width = Math.floor(obj.getScaledWidth());
	  }


	  save_data = JSON.stringify(datanya);
	  // console.log(JSON.parse(save_data) )
	  console.log(save_data)
	});

	canvas.on('object:scaled', function(options) {
		console.log(options)
	  var obj = canvas.getActiveObject();
	  var datanya = JSON.parse(save_data);
	  var id;

	  for (var i = 0; i < datanya.length; ++i) {
	    if (datanya[i].id == options['target']['id']) {
	      id = i;
	      break;
	    }   
	  }


	  if (options['target']['kategori'] == 'segi_empat' || options['target']['kategori'] == 'segi_tiga' ) {
	  	datanya[id].angle = options['target']['angle'];
	  	datanya[id].height = Math.floor(obj.getScaledHeight());
	  	datanya[id].left = options['target']['left'];
	  	datanya[id].top = options['target']['top'];
	  	datanya[id].width = Math.floor(obj.getScaledWidth());
	  }

	  if (options['target']['kategori'] == 'foto' || options['target']['kategori'] == 'teks' || options['target']['kategori'] == 'lingkaran' ) {
	  	// console.log(options['target'])
	  	datanya[id].angle = options['target']['angle'];
	  	datanya[id].height = Math.floor(obj.getScaledHeight());
	  	datanya[id].left = options['target']['left'];
	  	datanya[id].top = options['target']['top'];
	  	datanya[id].scaleY = options['target']['scaleY'];
	  	datanya[id].scaleX = options['target']['scaleX'];
	  	datanya[id].width = Math.floor(obj.getScaledWidth());
	  }

	  // console.log(save_data)
	  save_data = JSON.stringify(datanya);
	  // console.log(JSON.parse(save_data) )
	  console.log(save_data)

	});

	canvas.on('selection:created', function(options) {
		// console.log(options['target'])
		
		if (options['target']['strokeLineCap'] == 'round' && options['target']['strokeLineJoin'] == 'round') {
			// console.log('ini free drawing')
			var id = options['target']['idnya']
			// console.log("ini idnya : "+id)
			var ini_array;
			// console.log(canvas['_objects'])
			var object_canvas = canvas['_objects'];
			for (var i = 0; i < object_canvas.length; i++) {
				// console.log(object_canvas[i].idnya)
				if (object_canvas[i].idnya == options['target']['idnya']) {
					ini_array = i;
					break;
				}
			}
			// console.log("ini id array nya : "+ini_array)
			canvas['_objects'][ini_array].lockScalingX = true;
			canvas['_objects'][ini_array].lockScalingY = true;
			canvas['_objects'][ini_array].lockRotation  = true;
			canvas['_objects'][ini_array].lockMovementX   = true;
			canvas['_objects'][ini_array].lockMovementY  = true;
			// this.__canvases.push(canvas);
		}
	});

	canvas.on('selection:updated', function(options) {
		// console.log(options['target'])
		
		// console.log(options)
		if (options['target']['strokeLineCap'] == 'round' && options['target']['strokeLineJoin'] == 'round') {
			// console.log('ini free drawing')
			var id = options['target']['idnya']
			// console.log("ini idnya : "+id)
			var ini_array;
			// console.log(canvas['_objects'])
			var object_canvas = canvas['_objects'];
			for (var i = 0; i < object_canvas.length; i++) {
				// console.log(object_canvas[i].idnya)
				if (object_canvas[i].idnya == options['target']['idnya']) {
					ini_array = i;
					break;
				}
			}
			// console.log("ini id array nya : "+ini_array)
			canvas['_objects'][ini_array].lockScalingX = true;
			canvas['_objects'][ini_array].lockScalingY = true;
			canvas['_objects'][ini_array].lockRotation  = true;
			canvas['_objects'][ini_array].lockMovementX   = true;
			canvas['_objects'][ini_array].lockMovementY  = true;
			// this.__canvases.push(canvas);
		}
	});
//// end canvas event /////

function save_desain() {
	var penyimpanan = localStorage.getItem('simpanan')
  var a =  JSON.parse(save_data);
  var id = 1;
  if (penyimpanan == null) {
  	var ini = [{"id" : id ,"canvas" : color ,"isi" : a}];
  	// localStorage.setItem('coba2', JSON.stringify(ini));
  }
  else
  {
  	id = JSON.parse(penyimpanan);
  	id = id[id.length-1].id + 1
  	var ini = [{"id" : id ,"canvas" : color ,"isi" : a}];
  	penyimpanan = JSON.parse(penyimpanan)
  	ini  = penyimpanan.concat(ini);
  	// localStorage.setItem('coba2', JSON.stringify(ini));
  }
  localStorage.setItem('simpanan', JSON.stringify(ini));
  window.location.replace("desain_complete.html?id="+id);
}

function cek_simpanan(){
	// localStorage.removeItem('simpanan')
	// alert(localStorage.getItem('coba2'))
	console.log(JSON.parse(localStorage.getItem('simpanan')))
}








