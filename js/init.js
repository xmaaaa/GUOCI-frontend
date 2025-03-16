function layer_media_ready_func(layerid){
    var userAgent = navigator.userAgent.toLowerCase();
	if (!/iphone/i.test(userAgent)){
		var imgover=$('#wp-media-image_'+layerid).closest('.img_over');
		imgover.children('.imgloading').width(imgover.width()).height(imgover.height());
	}
	$('#'+layerid).layer_ready(function(){
		if(typeof(layer_img_lzld)=="function"){
		layer_img_lzld(layerid);
		}
	});
}

function layer_media_lazyload_func(layerid, iswx){
    var imgwidth = $('#'+layerid+' .wp-media_content').width();
    var imgheight = $('#'+layerid+' .wp-media_content').height();	
    var imgtop = ($('#wp-media-image_'+layerid));
    if(parseInt(imgtop.css('top'))<-600&&imgtop.attr('src').indexOf('blank.gif')>0){imgtop.attr('src',imgtop.attr('data-original'));}
    if(iswx){
 	if(imgtop.offset().top<window.screen.availHeight&&imgtop.attr('src').indexOf('blank.gif')>0){
 		imgtop.attr('src',imgtop.attr('data-original'));
 	}
 	setTimeout(function(){
		 var imgdisplay = imgtop.css('display');
		 if(imgdisplay&&imgdisplay=='inline') imgtop.css('display','inline-block');
		 },1200);
    }
	// bug#4119 - 妯″潡鑷€傚簲楂樺害瀵艰嚧鐨勭暀鐧�
	$('#'+layerid).bind("wrapmodheightadapt", function(){
		$('.img_over, img.paragraph_image', this).height($(this).height());
	});
}