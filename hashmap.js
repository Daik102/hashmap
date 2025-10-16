#!/usr/bin/env node

export function hashMap() {
  const loadFactor = 0.75;
  let capacity = 16;
  let limit = capacity * loadFactor;
  let entryCounter = 0;
  let totalLength = 0;
  let buckets = [];

  for (let i = 0; i < capacity; i++) {
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
      for (let i = 0; i < buckets[hashCode].length; i++) {
        const entry = buckets[hashCode][i];
        
        if (entry.key === key) {
          entry.value = value;
          return;
        }
      }
    }

    buckets[hashCode].push({ key, value });
    entryCounter += 1;
    totalLength += 1;
    
    if (entryCounter === limit + 1) {
      for (let i = 0; i < capacity; i++) {
        buckets.push([]);
      }

      capacity = capacity * 2;
      limit = capacity * loadFactor;
    }
  };

  const get = (key) => {
    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (let j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j].key;
        const valueInBucket = bucket[j].value;
        
        if (keyInBucket === key) {
          return valueInBucket;
        }
      }
    }

    return null;
  };

  const has = (key) => {
    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (let j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j].key;
        
        if (keyInBucket === key) {
          return true;
        }
      }
    }

    return false;
  };

  const remove = (key) => {
    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (let j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j].key;
        
        if (keyInBucket === key) {
          bucket.splice(j, 1);
          entryCounter -= 1;
          totalLength -= 1;
          return true;
        }
      }
    }

    return false;
  };

  const length = () => totalLength;

  const clear = () => {
    buckets = [];
    capacity = 16;
    limit = capacity * loadFactor;

    for (let i = 0; i < capacity; i++) {
    buckets.push([]);
  }

    return 'Cleared';
  };

  const keys = () => {
    const keysList = [];

    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      if (bucket[0]) {
        for (let j = 0; j < bucket.length; j++) {
          const keyInBucket = bucket[j].key;
          keysList.push(keyInBucket);
        }
      }
    }

    return keysList;
  };

  const values = () => {
    const valuesList = [];

    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      if (bucket[0]) {
        for (let j = 0; j < bucket.length; j++) {
          const valueInBucket = bucket[j].value;
          valuesList.push(valueInBucket);
        }
      }
    }

    return valuesList;
  };

  const entries = () => {
    const entriesList = [];

    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      if (bucket[0]) {
        for (let j = 0; j < bucket.length; j++) {
          const keyInBucket = bucket[j].key;
          const valueInBucket = bucket[j].value;
          entriesList.push([keyInBucket, valueInBucket]);
        }
      }
    }

    return entriesList;
  };

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}


export function hashSet() {
  const loadFactor = 0.75;
  let capacity = 16;
  let limit = capacity * loadFactor;
  let entryCounter = 0;
  let totalLength = 0;
  let buckets = [];

  for (let i = 0; i < capacity; i++) {
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

  const set = (key) => {
    const hashCode = hash(key);

    if (buckets[hashCode][0]) {
      for (let i = 0; i < buckets[hashCode].length; i++) {
        const keyInBucket = buckets[hashCode][i];
        
        if (keyInBucket === key) {
          return;
        }
      }
    }

    buckets[hashCode].push(key);
    entryCounter += 1;
    totalLength += 1;
    
    if (entryCounter === limit + 1) {
      for (let i = 0; i < capacity; i++) {
        buckets.push([]);
      }

      capacity = capacity * 2;
      limit = capacity * loadFactor;
    }
  };

  const has = (key) => {
    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (let j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j];
        
        if (keyInBucket === key) {
          return true;
        }
      }
    }

    return false;
  };

  const remove = (key) => {
    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      for (let j = 0; j < bucket.length; j++) {
        const keyInBucket = bucket[j];
        
        if (keyInBucket === key) {
          bucket.splice(j, 1);
          entryCounter -= 1;
          totalLength -= 1;
          return true;
        }
      }
    }

    return false;
  };

  const length = () => totalLength;

  const clear = () => {
    buckets = [];
    capacity = 16;
    limit = capacity * loadFactor;

    for (let i = 0; i < capacity; i++) {
    buckets.push([]);
  }

    return 'Cleared';
  };

  const keys = () => {
    const keysList = [];

    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      
      if (bucket[0]) {
        for (let j = 0; j < bucket.length; j++) {
          const keyInBucket = bucket[j];
          keysList.push(keyInBucket);
        }
      }
    }

    return keysList;
  };

  return {
    hash,
    set,
    has,
    remove,
    length,
    clear,
    keys,
  };
}
