import { Carousel, SectionHeader } from "@/components"
import ChartBar from "@/components/charts/ChartBar"
import ChartPie from "@/components/charts/ChartPie"
import ChartCard from "@/components/charts/ChartsCard"
import { useRouter } from "next/router"
import React from "react"

const Dashboard: React.FC = () => {

    const router = useRouter()

    return (
        <>
            {/* <SectionHeader title="Seja Bem-Vindo(a)" /> */}
            {/* <Carousel /> */}
            <div className="flex gap-4">
                <div className="flex p-6 border bg-white flex-col gap-3 rounded-lg border-slate-300 border align-center w-full shadow-lg">
                    <h2 className="text-gray-700 font-bold text-xl">Minhas análises</h2>
                    <div className="flex shadow-md flex-col border rounded-lg px-3 py-2 justify-between w-full cursor-pointer hover:bg-gray-1003"
                        onClick={() => router.push('/analytcs/1')}>
                        <div>
                            <h3 className="text-gray-700 font-bold text-md">Fulano Silva</h3>
                            <span className="text-gray-400">Youtuber</span>
                        </div>
                        <div className="flex gap-2 flex-row justify-between pt-2">
                            <div className="flex gap-1">
                                <span className="text-gray-400 font-bold text-xs" >Views:</span>
                                <span className="text-green-600 text-xs">5.900.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex shadow-md gap-1 flex-col border rounded-lg px-3 py-2 justify-between w-full cursor-pointer hover:bg-gray-100"
                        onClick={() => router.push('/analytcs/1')}>
                        <div>
                            <h3 className="text-gray-700 font-bold text-md">Cicrano Silva</h3>
                            <span className="text-gray-400">Youtuber</span>
                        </div>
                        <div className="flex gap-2 flex-row justify-between pt-2">
                            <div className="flex gap-1">
                                <span className="text-gray-400 font-bold text-xs" >Views:</span>
                                <span className="text-green-600 text-xs">19.000.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex py-4 px-4 border bg-white flex-col gap-3 rounded-lg border-slate-300 border
                cursor-pointer hover:bg-gray-100 shadow-lg" onClick={() => router.push('/users/1')}>
                        <h2 className="text-gray-700 font-bold text-xl">Meus Dados</h2>
                        <span className="text-gray-400">Meu Perfil.</span>
                    </div>

                    <div className="flex py-4 px-4 border bg-white flex-col gap-3 rounded-lg border-slate-300 border
                cursor-pointer hover:bg-gray-100 shadow-lg" onClick={() => router.push('/analytcs')}>
                        <h2 className="text-gray-700 font-bold text-xl">Análise de Dados</h2>
                        <span className="text-gray-400">Faça sua análise, anexe os prints e receba os dados de forma automatizada.</span>
                    </div>
                    <div className="flex py-4 px-4 border bg-white flex-col gap-3 rounded-lg border-slate-300 border
                cursor-pointer hover:bg-gray-100 shadow-lg" onClick={() => router.push('/users')}>
                        <h2 className="text-gray-700 font-bold text-xl">Meus Clientes</h2>
                        <span className="text-gray-400">Meus Leads de Clientes.</span>
                    </div>

                </div>
            </div>

            <div className="flex gap-2 flex-">
                <ChartCard />
                <ChartPie />
                <ChartBar />
            </div>
        </>
    )

}

export default Dashboard