  var round=function(num) {
  	counter = 0;
    if (num == 0){return}
    while (num>999 || num <100)
    
    {
    	if (num>999)
    	{
    		num /= 10;
    		counter ++;
    	}
    	else
    	{
    		num *= 10;
    		counter --;
    	}
    }
    
    num = num.toFixed(0);

    if (counter>0)
    {
    	while (counter!=0)
    	{
    		num *= 10;
    		counter --;
    	}
    }

    if (counter<0)
    {
    	while (counter!=0)
    	{
    		num /= 10;
    		counter ++;
    	}
    }
    return num;
  }

