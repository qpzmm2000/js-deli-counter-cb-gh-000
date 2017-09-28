var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!"
  }
  else{
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}


function currentLine(katzDeliLine)
{
  var result = "The line is currently: ";
  for(var i = 0; i < katzDeliLine.length; i++)
  {
    result += `${i}. ${katzDeliLine[i]}, `
  }
}