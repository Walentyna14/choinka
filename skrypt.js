var l = prompt("Podaj wysokość choinki: ", "");
var n= parseInt(l);
k=1;
for (i=0;i<n; i++)
{
	
		for (j=0;j<k; j++)
		{
			if(i<n-1)
			{
				if(j==i && i!=0)
					document.write("<span class=\"brown\">*</span>");
				else if (i==0)
					document.write("<span class=\"star\">*</span>");
				else 
					document.write("*")
			}
			else
			{
				if(j!=i)
					document.write("<span class=\"invisible\">_</span>")
				else
					document.write("<span class=\"brown\">*</span>")
			}
		}
	
	document.write("<br/>")
	k+=2;
}