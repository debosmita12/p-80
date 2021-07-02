var GuestName=document.getElementById("name_of_Guest_1").value;
name_of_Guest.push(GuestName);
name_of_Guest.sort();

function searching()
var found=0;
var j;
for(j=0; j<name_of_Guest.length; j++)
{
if(s==name_of_Guest[j])
  {
    found=found+1;
  }
}
document.getElementById("p+2").innerHTML="name found"+"found+" time/s") ;
console.log("found name+"found+" time/s") ;