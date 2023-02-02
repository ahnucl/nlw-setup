interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const progressStyle = {
    width: `${progress}%`,
  }

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4 ">
      <div
        // o Radix tem uma progressbar, abaixo como fazer sem ele
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        // aria-valuemin={0} // acho que esse é o padrão, esse valor seria pra tamanhos diferentes
        // aria-valuemax={100}
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={progressStyle}
      />
    </div>
  )
}
