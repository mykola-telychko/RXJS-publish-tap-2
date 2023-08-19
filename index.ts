import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish

// EXMPL - 2 - begin
//emit value every 1 second
// Example 1: Connect observable after subscribers
//do nothing until connect() is called
const exmpl_1 = publish()(
  interval(1000).pipe(tap((_) => console.log('Do Something!')))
);

const subscribe1 = exmpl_1.subscribe((v) => console.log(`Sbscrber1: ${v}`));
const subscribe2 = exmpl_1.subscribe((v) =>
  console.log(`Sbscrber2: ${v - 10}`)
);
const subscribe3 = exmpl_1.subscribe((v) => console.log(`Sbscrber3: ${v}`));
const subscribe4 = exmpl_1.subscribe((v) =>
  console.log(`Sbscrber4: ${v - 20}`)
);

// call connect after 5 seconds, causing source to begin emitting items
setTimeout(() => {
  exmpl_1.connect();
}, 5000);
// EXMPL - 2 - end
