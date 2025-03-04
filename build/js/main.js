"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener('orientationchange', function () {
  location.reload(true);
});

// padding no-ios
document.addEventListener("DOMContentLoaded", function () {
  var bonusTop = document.querySelector('.pirots__info-bonus-top');
  var bonusBottom = document.querySelector('.pirots__info-bonus-bottom');
  if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
    bonusTop.classList.add('noios-padding');
    bonusBottom.classList.add('noios-padding');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmNhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImJvbnVzVG9wIiwicXVlcnlTZWxlY3RvciIsImJvbnVzQm90dG9tIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFNBQVNBLFNBQVNBLENBQUEsRUFBRztFQUNwQixTQUFTQyxTQUFTQSxDQUFBLEVBQUc7SUFDbkIsSUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxJQUFJO0lBQ2xDQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsTUFBTSxLQUFBQyxNQUFBLENBQUtQLEVBQUUsT0FBSSxDQUFDO0VBQy9EO0VBQ0FELFNBQVMsQ0FBQyxDQUFDO0VBQ1hFLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxTQUFTLENBQUM7QUFDOUMsQ0FBQyxFQUFFLENBQUM7QUFFSkUsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFNO0VBQ2pEQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ0FQLFFBQVEsQ0FBQ0ssZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxJQUFJRyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQ2hFLElBQUlDLFdBQVcsR0FBR1YsUUFBUSxDQUFDUyxhQUFhLENBQUMsNEJBQTRCLENBQUM7RUFFdEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEVBQUU7SUFDbkRMLFFBQVEsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3ZDTCxXQUFXLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUM5QztBQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGluaXQxMDB2aCgpIHtcbiAgZnVuY3Rpb24gc2V0SGVpZ2h0KCkge1xuICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgfVxuICBzZXRIZWlnaHQoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XG59KSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCAoKSA9PiB7XG4gIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbn0pO1xuXG4vLyBwYWRkaW5nIG5vLWlvc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGxldCBib251c1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waXJvdHNfX2luZm8tYm9udXMtdG9wJyk7XG4gIGxldCBib251c0JvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waXJvdHNfX2luZm8tYm9udXMtYm90dG9tJyk7XG5cbiAgaWYgKCEvaVBhZHxpUGhvbmV8aVBvZHxNYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIGJvbnVzVG9wLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgICAgIGJvbnVzQm90dG9tLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbiAgfVxufSk7Il19
