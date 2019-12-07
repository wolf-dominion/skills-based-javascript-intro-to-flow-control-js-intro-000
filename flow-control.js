var age = 12;

function basicTeenager(x) {
if(x >= 13 && x <=19){
return "You are a teenager!"     
  }
}

function teenager(x) {
if(x >= 13 && x <=19){
  return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}

function ageChecker(x) {
  if (x >= 13 && x <=19){
    return "You are a teenager!";
  }
  else if (x <= 12){
    return "You are a kid";
  }
  return "You are a grownup";
}

function ternaryTeenager(x) {
return (x >= 13 && x <= 19) ? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(x) {
switch(x){
  case 12: 
    console.log ("You are a teenager");
    break;
   case 13:
     console.log("You are a teenager");
     break;
  default: 
    console.log ("You have an age");
}
}

basicTeenager(age);
teenager(age);
ageChecker(age);
ternaryTeenager(age);
switchAge(age);
