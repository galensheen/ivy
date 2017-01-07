/**
 * Created by galen on 2017/1/7.
 */

/**
 * 返回最大值
 * @param {Array} arr: 计算最大值的Number数组
 * @returns {number}
 * @desc max([1,2,5,22,3])
 */
function max(arr) {
  return Math.max(...arr);
}

/**
 * 返回最小值
 * @param {Array} arr: 计算最小值的Number数组
 * @returns {number}
 * @desc min([1,2,5,22,3])
 */
function min(arr) {
  return Math.min(...arr);
}

/**
 * 洗牌
 * @param {Array} arr: 待洗牌数组
 * @returns {Array}
 */
function shuffle(arr) {
  let random, result = [];
  
  while (arr.length) {
    random = Math.floor(Math.random() * arr.length);
    result = result.concat(arr.splice(random, 1));
  }
  
  return result;
}

/**
 * 数组扁平化
 * @param arr
 * @returns {Array}
 */
function flatten(arr) {
  let result = [];
  
  for (let i = 0, len = arr.length; i < len; i++) {
    let temp = arr[i];
    if (typeof temp === 'object') {
      result = result.concat(flatten(temp));
    } else {
      result.push(temp);
    }
  }
  
  return result;
}

/**
 * 数组去重
 * @param arr
 * @returns {[*]}
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * 函数节流，一个interval时间里最多只能发生一次
 * @param {Function} fn: 执行函数
 * @param {Number} interval: 节流间隔
 * @returns {Function}
 */
function throttle(fn, interval=500) {
  let timer;
  
  return function (...args) {
    let ctx = this;
    if (!!timer) return;
    
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, interval);
    
    fn.apply(ctx, args);
  }
}

/**
 * 函数去抖，动作持续idle时间后执行，如果之间又触发此动作，则重新计时
 * @param {Function} fn: action函数
 * @param {Number} idle: 抖动空闲时间
 * @returns {Function}
 */
function debounce(fn, idle) {
  let last;
  
  return function (...args) {
    let ctx = this;
    
    clearTimeout(last);
    
    last = setTimeout(() => {
      fn.apply(ctx, args);
    }, idle);
  }
}

