

enquire.register("screen and (min-width: 768px)",{
	match:function(){
		$('#gallery-Rococo').cycle();
	},
	unmatch:function(){
		$('#gallery-Rococo').cycle('destroy');
		$('#gallery-Rococo img').attr('style','');
	}
}).listen();