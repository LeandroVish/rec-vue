<script setup></script>

<template>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Finalizar
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Finalizar Compra</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div class="modal-body">
                <input class="form-control" type="text" placeholder="Endereço" aria-label="default input example">
                <input class="form-control" type="text" placeholder="Numero Imovel" aria-label="default input example">
                <input class="form-control" type="text" placeholder="Bairro" aria-label="default input example">
                <input class="form-control" type="text" placeholder="Cidade" aria-label="default input example">
                <input class="form-control" type="text" placeholder="Estado" aria-label="default input example">
                <input class="form-control" type="text" placeholder="CEP" aria-label="default input example">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary">Pronto</button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped></style>