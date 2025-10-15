#!/usr/bin/env node
const buckets = [];

function hashMap() {
  const loadFactor = 0.75;
  let capacity = 16;
  const limit = capacity * loadFactor;
  let entryCounter = 0;

  for (i = 0; i < capacity; i++) {
    buckets.push([]);
  }

  const hash = (key) => {
    const primeNumber = 31;
    const mod = capacity;
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mod;
    }

   return hashCode;
  };

  const set = (key, value) => {
    const hashCode = hash(key);

    if (buckets[hashCode][0]) {
      for (i = 0; i < buckets[hashCode].length; i++) {
        if (buckets[hashCode][i].key === key) {
          buckets[hashCode][i].value = value;
          break;
        }

        buckets[hashCode].push({key, value});
      }
    } else {
      buckets[hashCode].push({key, value});
    }
    
    entryCounter += 1;

    if (entryCounter >= limit) {
      for (i = 0; i < capacity; i++) {
        buckets.push([]);
      }

      capacity = capacity * 2;
    }
  };

  const get = (key) => {
    for (i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j].key;
        
        if (keyInBucket === key) {
          return bucket[j].value;
        }
      }
    }

    return null;
  };

  const has = (key) => {
    for (i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j].key;
        
        if (keyInBucket === key) {
          return true;
        }
      }
    }

    return false;
  }; 

  return {
    hash,
    set,
    get,
    has,
  };
}

const test = hashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

const getOne = test.get('banana');
const hasOne = test.has('peach');

console.log(hasOne);

