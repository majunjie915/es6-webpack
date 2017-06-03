import { firstName, lastName } from './pages/export.js';
import { bar, foo, fn0, fn1} from './pages/lib.js';

fn0();
fn1();

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'cube',
    grabCursor: true,
    cube: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    }
});

document.getElementById("div1").innerHTML = firstName+" "+lastName;
$("#div2").html(bar+"_"+foo);