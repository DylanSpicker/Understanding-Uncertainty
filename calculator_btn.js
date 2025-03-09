<script>
document.addEventListener('DOMContentLoaded', function() {
    const calculatorButton = document.getElementById('calculator-holder-btn');
    const calculatorHolder = document.getElementById('calculator-holder');
  
    if (calculatorButton && calculatorHolder) {
      let isVisible = false;
  
      calculatorButton.addEventListener('click', function() {
        if (isVisible) {
          calculatorHolder.style.bottom = '-100%';
          calculatorButton.innerHTML = '<i class="bi bi-calculator"></i>';
        } else {
          calculatorHolder.style.bottom = '0';
          calculatorButton.innerHTML = '<i class="bi bi-x-lg"></i>';
        }
        isVisible = !isVisible;
      });
    }
  });
</script>