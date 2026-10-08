'use strict';

const status = document.getElementById('copy-status');

function fitPrompts() {
  document.querySelectorAll('textarea[readonly]').forEach((field) => {
    field.style.height = 'auto';
    field.style.height = `${field.scrollHeight + 2}px`;
  });
}

fitPrompts();
window.addEventListener('resize', fitPrompts);

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const field = document.getElementById(button.dataset.copy);
    if (!(field instanceof HTMLTextAreaElement)) return;
    button.disabled = true;
    status.textContent = 'Đang sao chép…';
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(field.value);
      status.textContent = 'Đã sao chép mẫu. Dán vào ChatGPT và thay từ khóa của bạn.';
    } catch {
      field.focus();
      field.select();
      status.textContent = 'Chưa sao chép tự động được. Mẫu đã được chọn; hãy dùng lệnh Sao chép trên thiết bị của bạn.';
    } finally {
      button.disabled = false;
    }
  });
});
