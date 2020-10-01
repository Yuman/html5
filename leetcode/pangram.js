function pangrams(s) {
/*
 let map = {};
 let chars = s.toLowerCase().replace(/\s/g, '');
 for (const c of chars){
     map[c] = 1;
 }
 return Object.keys(map).length===26?"pangram":"not pangram";
*/

 let aset = {};
 s.toLowerCase().replace(/\s/g, '').split('').map(c =>aset[c]=1);
 return Object.keys(aset).length===26?"pangram":"not pangram";

//return Object.keys(Object.fromEntries(s.toLowerCase().replace(/\s/g, '').split('').map(e=>[e,e]))).length===26?"pangram":"not pangram";
/*
let cleanA = s.toLowerCase().replace(/\s/g, '').split('');
let entries = cleanA.map(c => [c,c]);
let o = Object.fromEntries(entries);
return Object.keys(o)===26?"pangram":"not pangram";
*/

//return Array.from((new Map(s.toLowerCase().replace(/\s/g, '').split('').map(e=>[e,e]))).keys()).length===26?"pangram":"not pangram";

/*
let cleanA = s.toLowerCase().replace(/\s/g, '').split('');
let set = new Set(cleanA);
return set.size===26?"pangram":"not pangram";
*/
}

let s = 'We promptly judged antique ivory buckles for the next prize';
pangram(s)

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let words = str.split(' ');
    if (pattern.length != words.length) return false;
    let pMap = {}, wMap = {};
    //debugger
    for (let i = 0; i < pattern.length; i++){
        if(pMap[pattern[i]] || wMap[words[i]]){
            if (pMap[pattern[i]] != words[i] || wMap[words[i]] != pattern[i]){
                return false;
            }
        }else{
            pMap[pattern[i]] = words[i];
            wMap[words[i]] = pattern[i];
        }        
    }
    return true;
};

wordPattern("abba","dog cat cat dog");

var isIsomorphic = function(s, t) {
  if(s.length !== t.length){
    return false;
  }

  let hashA = {};
  let hashB = {};

   for(let i = 0; i < s.length; i++){
     hashA[s[i]] = t[i]
     hashB[t[i]] = s[i]
   }

return s.split('').map(c => hashA[c]).join('') == t && t.split('').map(c => hashB[c]).join('') == s;

};

isIsomorphic("egg", "add")