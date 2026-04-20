function mudarAba(idDaSecao, elementoClicado) {
            document.querySelectorAll('.aba-conteudo').forEach(secao => {
                secao.style.display = 'none';
            });
            document.getElementById(idDaSecao).style.display = 'block';

            document.querySelectorAll('.sidebarNav a').forEach(link => {
                link.classList.remove('ativo');
            });
            elementoClicado.classList.add('ativo');
        }

        function confirmarPresenca() {
            const btnConfirma = document.getElementById('btn-confirma');
            btnConfirma.innerText = "✅ Presença Confirmada";
            btnConfirma.disabled = true;
            btnConfirma.style.background = "#059669"; 
        }

        let tempoRestante = 25 * 60; 
        let timerIntervalo = null;
        let rodando = false;

        function atualizarDisplay() {
            const minutos = Math.floor(tempoRestante / 60);
            const segundos = tempoRestante % 60;
            document.getElementById('timer-display').innerText = 
                `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }

        function iniciarTimer() {
            if (rodando) return; 
            rodando = true;
            timerIntervalo = setInterval(() => {
                if (tempoRestante > 0) {
                    tempoRestante--;
                    atualizarDisplay();
                } else {
                    clearInterval(timerIntervalo);
                    rodando = false;
                    alert("Tempo de estudo finalizado! Parabéns!");
                }
            }, 1000); 
        }

        function pausarTimer() {
            clearInterval(timerIntervalo);
            rodando = false;
        }

        function resetarTimer() {
            pausarTimer();
            tempoRestante = 25 * 60; 
            atualizarDisplay();
        }