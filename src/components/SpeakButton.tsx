import { speak, speechSupported } from '@/utils/speak';

interface Props {
  /** Text to pronounce (bilingual strings are fine; only English is spoken). */
  text: string;
  className?: string;
}

/**
 * Small speaker button that reads the given text with the device's
 * own English voice. Disabled with an explanatory title when the
 * browser has no speech synthesis (e.g. Firefox on Android).
 */
function SpeakButton({ text, className = '' }: Props) {
  const supported = speechSupported();
  return (
    <button
      type="button"
      disabled={!supported}
      title={
        supported
          ? 'شنیدن تلفظ'
          : 'مرورگر شما پخش صدا ندارد؛ با کروم یا سامسونگ اینترنت باز کنید'
      }
      aria-label="شنیدن تلفظ"
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 text-lg disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      🔊
    </button>
  );
}

export default SpeakButton;
