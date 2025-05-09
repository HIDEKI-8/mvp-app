
// 必須項目の入力チェック強化
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(e) {
        const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");
        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
            }
        });
        if (!valid) {
            e.preventDefault();
            alert("全ての必須項目を入力してください。");
        }
    });
});

// 売上・費用ページの自動利益計算表示
if (document.querySelector('input[name="monthly_sales"]')) {
    function calculateProfit() {
        const sales = Number(document.querySelector('input[name="monthly_sales"]').value) || 0;
        const fixed = Number(document.querySelector('input[name="fixed_costs"]').value) || 0;
        const variable = Number(document.querySelector('input[name="variable_costs"]').value) || 0;
        const profit = sales - fixed - variable;
        let display = document.getElementById("profit_display");
        if (display) {
            display.textContent = `営業利益：${profit}円`;
        }
    }
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateProfit);
    });
}

// フォーム確認前のポップアップ確認
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(e) {
        const confirmSubmit = confirm("本当に進めますか？");
        if (!confirmSubmit) {
            e.preventDefault();
        }
    });
});

// トップへ戻るボタン
const toTopBtn = document.getElementById("toTopBtn");
if (toTopBtn) {
    toTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
