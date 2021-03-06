// import the library and its hooks
import augmentor, {useCallback, useEffect, useRef, useState} from '../esm/index.js';

const test = el => {

  useEffect(() => {
    console.log('after');
    return () => console.log('before');
  });

  useEffect(() => {
    console.error('THIS SHOULD NOT HAPPEN');
  }, (callback, result) => {
    console.log(result);
  });

  const counter = useRef(0);

  const [activated,  setActivated] = useState(() => false);
  const [firstTime,  setFirstTime] = useState(true);

  const onclick = useCallback(() => {
    counter.current++;
    if (firstTime)
      setFirstTime(false);
    setActivated(!activated);
  }, []);

  const onmouseover = useCallback((event) => {
    console.log(event.type, event.currentTarget.id);
  }, [counter.current]);

  const handler = useRef(Handler.new);

  el.innerHTML = `
    <strong>#${el.id}</strong><br>
    activated: ${activated}<br>
    first time: ${firstTime}<br>
    clicked: ${counter.current} times<br>
  `;

  el.addEventListener('click', onclick);
  el.addEventListener('mouseover', onmouseover);
  el.addEventListener('mouseover', handler.current);

  return Math.random();

};

class Handler {
  static new() {
    return new Handler;
  }
  onmouseover(event) {
    console.log('over', event.currentTarget.id);
  }
  handleEvent(event) {
    this['on' + event.type](event);
  }
}

const [one, two] = [test, test].map(augmentor);

addEventListener('load', () => {
  one(first);
  two(second);
  setTimeout(one.reset, 5000);
});
