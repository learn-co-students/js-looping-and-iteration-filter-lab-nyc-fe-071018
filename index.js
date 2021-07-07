// Code your solution in this file

function findMatching(drivers, str)
{
    return drivers.filter(driver => (driver.toLowerCase()===str.toLowerCase())
   );
}
  
function fuzzyMatch(drivers,ltr){
  
  return drivers.filter(driver=>(driver.substring(0,2)===ltr))
  
}

function matchName(drivers, str)
{
  return drivers.filter(drivers=>(drivers.name===str))

}