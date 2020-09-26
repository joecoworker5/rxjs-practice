import { map, filter, takeUntil, concatAll, concat, take, zip , withLatestFrom} from 'rxjs/operators';
import { Observable, of , from, fromEvent, interval} from 'rxjs'; 



// var source = of('Jerry', 'Anna');
// source.subscribe(console.log);


// var source2 = Observable.create(function(observer){
//   observer.next('Jerry2');
//   observer.complete('Anna2');
//   observer.next('Anna2');
// });
// source2.subscribe({
//   next:console.log,
//   complete:console.log
// });


// var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'] 
// var source3 = from(arr);

// source3.subscribe({
//     next: function(value) {
//         console.log(value)
//     },
//     complete: function() {
//         console.log('complete!');
//     },
//     error: function(error) {
//         console.log(error)
//     }
// });

// var source4 = fromEvent(document.body, 'click');

// source4.subscribe({
//     next: function(value) {
//         console.log(value)
//     },
//     complete: function() {
//         console.log('complete!');
//     },
//     error: function(error) {
//         console.log(error)
//     }
// });


// var source5 = interval(1000).pipe(map(x => x + 1)).pipe(filter(x=>x%3===1)).pipe(takeUntil(source4)).subscribe(console.log).unsubscribe();

// var click = fromEvent(document.body, 'click');
// var source6 = click.pipe(map(e =>of(1,2,3)));

// var example = source6.pipe(concatAll());
// example.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });



// var source7 = interval(1000).pipe(take(3));
// var source8 = of(3);
// var source9 = of(4,5,6);
// var example1 = source7.pipe(concat( source8, source9));

// example1.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });


var main = from('hello').pipe(zip(interval(500), (x, y) => x));
var some = from([0,1,0,0,0,1]).pipe(zip(interval(300), (x, y) => x));

var example2 = main.pipe(withLatestFrom(some, (x, y) => {
    return y === 1 ? x.toUpperCase() : x;
}));

example2.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});


###
