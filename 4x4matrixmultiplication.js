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

function matrix ( m1 , m2) {
var M= [];
for(var i=0;i<16;i+=4){
for(var u=0;u<4;u++){
M.push (m1[ i] *m2[ u ] + m1 [ i+1 ] * m2 [ u +4 ] + m1[i+2] * m2 [u+8] + m1 [i+3 ] * m2 [u + 12 ])
}}
return M ;
}

document.body.innerHTML = matrix(m1,m2).join(",");
