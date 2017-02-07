
			function getstyle(obj, name) {
				if(obj.currentStyle) {
					return obj.currentStyle[name];
				} else {
					return getComputedStyle(obj, 2)[name];
				}
			};

			function chaineMove(obj, arrt, target,fnEnd) {
				clearInterval(obj.timer);
				obj.timer = setInterval(function() {
					var cur=0;
					if(arrt=='opacity')
					{
					  cur=Math.round(parseFloat(getstyle(obj,arrt))*100);	
					}
					else
					{
					  cur=parseInt(getstyle(obj,arrt));	
					}
					
					var speed = (target - cur)/4;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					
					if(target==cur)
					{
						clearInterval(obj.timer);
						if(fnEnd)
						fnEnd();
					}
					else
					{
						if(arrt=='opacity')
						{
							obj.style.filter='alpha(opacity:'+(cur+speed)+')';
							obj.style.opacity=(cur+speed)/100;
						}
						else
						{
						obj.style[arrt]=cur+speed+'px';	
						}
						
					}

				}, 30);
			};