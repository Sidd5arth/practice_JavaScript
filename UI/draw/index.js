document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        context.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = 'black';

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    // Event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
});
