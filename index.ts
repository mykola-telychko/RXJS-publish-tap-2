import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish

// EXMPL - 1 - begin
//emit value every 1 second
// Example 1: Connect observable after subscribers
// const srcInterval = interval(1000); //do nothing until connect() is called

const exmpl_1 = publish()(
  interval(1000).pipe(
    //side effects will be executed once
    tap((_) => console.log('Do Something!'))
  )
);

const subscribe1 = exmpl_1.subscribe((v) => console.log(`Sbscrber 1: ${v}`));
const subscribe2 = exmpl_1.subscribe((v) => console.log(`Sbscrber 2: ${v}`));
const subscribe3 = exmpl_1.subscribe((v) => console.log(`Sbscrber 3: ${v}`));

// call connect after 5 seconds, causing source to begin emitting items
setTimeout(() => {
  exmpl_1.connect();
}, 5000);
// EXMPL - 1 - end
