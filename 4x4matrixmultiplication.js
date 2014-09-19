var m1  = [
1,0,0,0,
0,1,0,0,
0,0,1,0,
0,0,0,1];
var m2  = [
1,0,0,0,
0,1,0,0,
0,0,1,0,
0,0,0,1];

var matrix = function(a,b){	//a 4x4 matrix in array
	var c=[];	//result
	for(var d=0;d<16;d+=4){		//for every first matrix's row
		for(var e=0;e<4;e++)	//for every second matrix's column
			//calculate it
			c.push(
				a[d]*b[e]+
				a[d+1]*b[e+4]+
				a[d+2]*b[e+8]+
				a[d+3]*b[e+12]
			);
	}
	return c	//return an array
}

document.body.innerHTML = matrix(m1,m2).join(",");
