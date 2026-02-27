import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Login from './pages/Login'
import Home from './pages/Home'
import Library from './pages/Library'
import MovieDetail from './pages/MovieDetail'
import Marketplace from './pages/Marketplace'
import Settings from './pages/Settings'

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    if (!isAuthenticated) return <Login onLogin={() => setIsAuthenticated(true)} />

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar onMenuClick={() => setSidebarOpen(v => !v)} />
                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/library/:type?" element={<Library />} />
                        <Route path="/movie/:id" element={<MovieDetail />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}
