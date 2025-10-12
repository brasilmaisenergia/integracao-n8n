'use client';

import { useState } from 'react';
import Image from 'next/image';

interface InvoiceData {
  nomeCliente: string;
  cpfCnpj: string;
  numeroInstalacao: string;
  distribuidora: string;
  consumoKwh: number;
  valorTotal: number;
  valorKwh: number;
  modalidadeTarifaria: string;
  classeConsumo: string;
  endereco: string;
}

interface InvoiceUploadProps {
  onDataExtracted?: (data: InvoiceData) => void;
  onError?: (error: string) => void;
}

export default function InvoiceUpload({ onDataExtracted, onError }: InvoiceUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState<InvoiceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validar tipo de arquivo
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(selectedFile.type)) {
        setError('Por favor, envie apenas arquivos JPG, PNG ou PDF');
        return;
      }

      // Validar tamanho (máximo 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('O arquivo deve ter no máximo 10MB');
        return;
      }

      setFile(selectedFile);
      setError(null);

      // Criar preview para imagens
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  const analyzeInvoice = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('invoice', file);

      const response = await fetch('/api/analyze-invoice', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao analisar a fatura');
      }

      const data = await response.json();
      setExtractedData(data);
      
      if (onDataExtracted) {
        onDataExtracted(data);
      }
    } catch (err) {
      const errorMessage = 'Erro ao processar a fatura. Por favor, tente novamente.';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Área de Upload */}
      <div className="mb-6">
        <label
          htmlFor="invoice-upload"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-[#2A4B7B] transition-colors"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {preview ? (
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={preview}
                  alt="Preview da fatura"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <>
                <svg
                  className="w-12 h-12 mb-4 text-[#2A4B7B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-700">
                  <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                </p>
                <p className="text-xs text-gray-500">PNG, JPG ou PDF (máx. 10MB)</p>
              </>
            )}
          </div>
          <input
            id="invoice-upload"
            type="file"
            className="hidden"
            accept="image/jpeg,image/jpg,image/png,application/pdf"
            onChange={handleFileChange}
          />
        </label>

        {file && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-8 h-8 text-[#2A4B7B]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                  setExtractedData(null);
                }}
                className="text-red-600 hover:text-red-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Botão de Análise */}
      {file && !extractedData && (
        <button
          onClick={analyzeInvoice}
          disabled={loading}
          className="w-full bg-[#2A4B7B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1e3557] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Analisando fatura com IA...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Analisar Fatura com IA</span>
            </>
          )}
        </button>
      )}

      {/* Erro */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-red-800">{error}</p>
          </div>
        </div>
      )}

      {/* Dados Extraídos */}
      {extractedData && (
        <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-lg font-semibold text-green-900">
              Fatura analisada com sucesso!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Nome do Cliente</p>
              <p className="font-semibold text-gray-900">{extractedData.nomeCliente}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">CPF/CNPJ</p>
              <p className="font-semibold text-gray-900">{extractedData.cpfCnpj}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Distribuidora</p>
              <p className="font-semibold text-gray-900">{extractedData.distribuidora}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Nº Instalação</p>
              <p className="font-semibold text-gray-900">{extractedData.numeroInstalacao}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Consumo Mensal</p>
              <p className="font-semibold text-gray-900">{extractedData.consumoKwh} kWh</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Valor Total</p>
              <p className="font-semibold text-gray-900">
                R$ {extractedData.valorTotal.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Valor por kWh</p>
              <p className="font-semibold text-gray-900">
                R$ {extractedData.valorKwh.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Classe</p>
              <p className="font-semibold text-gray-900">{extractedData.classeConsumo}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-green-200">
            <p className="text-xs text-gray-600 mb-1">Endereço</p>
            <p className="font-semibold text-gray-900">{extractedData.endereco}</p>
          </div>
        </div>
      )}

      {/* Informações de Segurança */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5 text-[#2A4B7B] mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-sm font-semibold text-[#2A4B7B] mb-1">
              Seus dados estão seguros
            </p>
            <p className="text-xs text-gray-600">
              Utilizamos criptografia de ponta a ponta e estamos em conformidade com a LGPD.
              Seus dados são processados de forma segura e nunca compartilhados sem sua autorização.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

