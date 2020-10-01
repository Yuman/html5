const codeMap = new Map();
const baseUrl = 'http://tinyurl.com/'
const randToken = function(){
  CHARS62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const num = () => Math.floor(Math.random()*62);
  let num6 = [];
  for (let i = 0; i<5; i++){
    num6.push(num());
  }
  return num6.map(e => CHARS62[e]).join('');
}

const encode(longUrl){
   let token = codeMap.get();
   if (token) return baseUrl + token;

   for(token = randToken(); ;token = randToken(){
     if(!codeMap.has(token)){
       codeMap.put(longUrl, token);
       codeMap.put(token, longUrl);
       return baseUrl + token;
     }
   }
}

const decode(shortUrl){
  
}

"tebbem"
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let sa = s.split('');
    let sar = s.split('').reverse();
    let len = sa.length;
    let misPos = []
    let counts = new Map();

    for(let i = 0; i < s.length; i++){
      counts.set(sa[i], counts.has(sa[i])?counts.get(sa[i])+1:1)
      if (sa[i] !== sar[i]){
         misPos.push(i);
      } 
    }
    if (misPos.length === 0) return true;
        debugger
    let oddCount = 0;
    for(const cnt of counts.values()){
        if (cnt%2 === 1) oddCount++
    }
    if (oddCount > 2) return false;
    
    if (oddCount === 2){
        if(sa[Math.floor(len/2)] !== sar[Math.ceil(len/2)] 
        && sa[Math.ceil(len/2)] !== sar[Math.floor(len/2)]){
          return false;
        }
    }
    
    //if (misPos.length ===2 && len >3 && misPos[1] - misPos[0] ===1) return true;
    
    misPos = [];
    for(let i = 0; i < s.length-1; i++){
      if (sa[i] !== sar[i+1]) misPos.push(i);
    }
    if ( misPos.length === 0) return true;
    if ( misPos.length === 2 && oddCount <= 2 ) return true;
    
    misPos = [];
    for(let i = 1; i < s.length; i++){
      if (sa[i] !== sar[i-1]) misPos.push(i);
    }
    if (misPos.length === 0) return true;
    if (misPos.length === 2 && oddCount <= 2) return true;
    
    return false;    
};