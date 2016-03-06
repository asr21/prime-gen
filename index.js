'use strict';
var getPrimesUptoRootN=function(n) {
	var x=Math.ceil(Math.sqrt(n));
	var flags=new Array(x+1);
	for(var i=0;i<flags.length;i++) {
		flags[i]=true;
	}
	for(var i=2;i<=x;i++) {
    	if(flags[i]) {
			for(var j=i*2;j<=x;j=j+i) {
    			flags[j]=false;
    		}
    	}
   	}
	var primes=[];
	for(var i=2;i<=x;i++) {
    	if(flags[i]) {
    		primes.push(i);
    	}
    }
    return primes;
}
var primeGenerator=function(m,n) {
	if(m<2)
    {
    	m=2;
    }
	var primes=getPrimesUptoRootN(n);
	var flags=new Array(n-m+1);
	for(var i=0;i<flags.length;i++) {
		flags[i]=true;
	}
	for(var i=0;i<primes.length;i++)
    {
    	var x=primes[i];
    	var start=Math.floor(m/x);
    	start=start*x;
    	if(start<m)
    	{
    		start+=x;
    	}
    	for(var j=start;j<=n;j=j+x)
    	{
    		flags[j-m]=false;
    	}	
    }
    var finprimes=[];
    for(var i=0;i<primes.length;i++)
    {
    	if(primes[i]>=m)
    	{
    		finprimes.push(primes[i]);
    	}
    }
    for(var i=0;i<(n-m+1);i++)
    {
    	if(flags[i])
    	{
    		finprimes.push(m+i);
    	}
    }
   	return finprimes;
}
module.exports.primeGenerator=primeGenerator